import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/20/solid';
import {
  ChevronDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Chip,
  CircularProgress,
  Dialog,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { debounce } from 'lodash';
import { schemaCreateAttribute } from '@/common/utils/schema';
import { Button, CmsForm, Column, Input, Table } from '@/components';
import { useAppDispatch, useAppSelector, useTheme } from '@/hooks/common-hook';
import { IAttribute, IPayloadCreateAttribute } from '@/models/attribute.model';
import {
  createAttribute,
  deleteAttribute,
  getDetailAttribute,
  getListAttribute,
  updateAttribute,
} from '@/redux/slices/attribute-slice';
import { ModalServices } from '@/services/modal-service';
import { DefaultStatus, IErrorsProps } from '@/types/common-global.types';

export const AttributesPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaCreateAttribute),
  });

  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const { attributes = [] } = useAppSelector(state => state.attribute);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [idEditModal, setIdEditModal] = useState<string | boolean>(false);
  const [isCreating, setIsCreating] = useState(false);
  const [anchorElStatus, setAnchorElStatus] = useState<{
    [key: string]: HTMLElement;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [totalItem, setTotalItem] = useState(0);
  const [detailAttribute, setDetailAttribute] = useState<IAttribute>();
  const [searchText, setSearchText] = useState<string>('');

  const handleClickStatus = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    setAnchorElStatus({ [id]: event.target } as any);
  };
  const handleCloseMenuStatus = () => {
    setAnchorElStatus(null);
  };

  const getAttributes = useCallback(async () => {
    try {
      setIsLoading(true);
      const { totalItem, page: pageRes } = await dispatch(
        getListAttribute({ pageSize, page: 1, content: searchText }),
      ).unwrap();
      setTotalItem(totalItem);
      setPage(pageRes);
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError(err);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, pageSize, searchText]);

  const onRefreshAttributes = useCallback(async () => {
    try {
      setIsLoading(true);
      const { totalItem, page: pageRes } = await dispatch(
        getListAttribute({ pageSize, page, content: searchText }),
      ).unwrap();
      setTotalItem(totalItem);
      setPage(pageRes);
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError(err);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, page, pageSize, searchText]);

  const onLoadMore = useCallback(
    async (page: number) => {
      try {
        setIsLoading(true);
        const { totalItem, page: pageRes } = await dispatch(
          getListAttribute({ pageSize, page: page + 1, content: searchText }),
        ).unwrap();
        setTotalItem(totalItem);
        setPage(pageRes);
      } catch (error) {
        const err = error as IErrorsProps;
        ModalServices.showMessageError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, pageSize, searchText],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSearch = useCallback(
    debounce((txt: string) => {
      setSearchText(txt);
    }, 500),
    [],
  );

  const onEdit = (id: string) => {
    return async () => {
      setIdEditModal(id);
      try {
        setIsLoadingDetail(true);
        const { data } = await dispatch(getDetailAttribute(id)).unwrap();
        setDetailAttribute(data);
        setValue('name', data.name);
      } catch (error) {
        setIdEditModal(false);
        setDetailAttribute(undefined);
      } finally {
        setIsLoadingDetail(false);
      }
    };
  };

  const onDelete = (id: string) => {
    return () => {
      ModalServices.showConfirmModal({
        title: 'Are you sure?',
        message: 'Are you sure delete this attribute?',
        onConfirm: async () => {
          try {
            await dispatch(deleteAttribute(id)).unwrap();
            await onRefreshAttributes();
            ModalServices.showMessageSuccess({
              message: 'Delete attribute successfully',
            });
          } catch (error) {
            ModalServices.showMessageError({
              message: 'Delete attribute failed',
            });
          }
        },
        onCancel: () => {},
      });
    };
  };

  const handleChangeStatus = ({
    status,
    data,
  }: {
    status: `${DefaultStatus}`;
    data: any;
  }) => {
    return async () => {
      setAnchorElStatus(null);
      try {
        await dispatch(
          updateAttribute({
            data: { name: data.name, status },
            id: data.id,
          }),
        ).unwrap();
        await onRefreshAttributes();
        ModalServices.showMessageSuccess({
          message: 'Update status successfully',
        });
      } catch (error) {
        ModalServices.showMessageError({
          message: 'Update status failed',
        });
      }
    };
  };

  const columns: Column[] = [
    {
      id: 'stt',
      label: 'STT',
      width: '20%',
    },
    {
      id: 'name',
      label: 'Name',
      width: '60%',
      align: 'left',
    },
    {
      id: 'type',
      label: 'Type',
      width: '10%',
      align: 'center',
      render: (row: any) => {
        return (
          <Typography sx={{ textTransform: 'capitalize' }}>
            {row?.type}
          </Typography>
        );
      },
    },
    {
      id: 'status',
      label: 'Status',
      width: '10%',
      align: 'left',
      render: (row: any) => {
        return (
          <div>
            <Chip
              deleteIcon={<ChevronDownIcon height={16} width={16} />}
              onDelete={(e: any) => handleClickStatus(e, row.id)}
              sx={{ textTransform: 'capitalize' }}
              label={row.status}
              color={row.status === DefaultStatus.Active ? 'success' : 'error'}
            />
            <Menu
              elevation={1}
              id={row.id}
              anchorEl={anchorElStatus?.[row.id]}
              open={!!anchorElStatus?.[row.id]}
              onClose={handleCloseMenuStatus}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}>
              <MenuItem
                onClick={handleChangeStatus({ status: 'active', data: row })}>
                <Typography color={colors.success}>Active</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleChangeStatus({ status: 'inactive', data: row })}>
                <Typography color={colors.error}>Inactive</Typography>
              </MenuItem>
            </Menu>
          </div>
        );
      },
    },
    {
      id: 'action',
      label: '',
      width: '10%',
      align: 'center',
      render: (row: any) => {
        return (
          <Box display="flex" flexDirection="row">
            <IconButton color="primary" onClick={onEdit(row.id)}>
              <PencilSquareIcon height={24} />
            </IconButton>

            <IconButton color="error" onClick={onDelete(row.id)}>
              <TrashIcon height={24} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const createDataTableRow = useCallback(
    (
      attribute: { type: string; name: string; id: string; status: string },
      idx: number,
    ) => {
      return {
        stt: +idx + 1,
        name: attribute.name,
        status: attribute.status,
        type: attribute.type,
        id: attribute.id,
      };
    },
    [],
  );

  const rows = useMemo<any>(() => {
    return attributes.map((attribute, idx) =>
      createDataTableRow(attribute, idx),
    );
  }, [attributes, createDataTableRow]);

  const onCreateAttribute = useCallback(
    async (data: IPayloadCreateAttribute) => {
      try {
        setIsCreating(true);
        await dispatch(createAttribute(data)).unwrap();
        await onRefreshAttributes();
        ModalServices.showMessageSuccess({
          message: 'Attribute created successfully',
        });
        setOpenCreateModal(false);
      } catch (error) {
        const err = error as IErrorsProps;
        ModalServices.showMessageError({ message: err.message });
      } finally {
        setIsCreating(false);
      }
    },
    [dispatch, onRefreshAttributes],
  );

  const onEditAttribute = useCallback(
    async (data: IPayloadCreateAttribute) => {
      try {
        setIsCreating(true);
        await dispatch(
          updateAttribute({
            data: { ...data, status: detailAttribute?.status },
            id: idEditModal as any,
          }),
        ).unwrap();
        await onRefreshAttributes();
        ModalServices.showMessageSuccess({
          message: 'Attribute updated successfully',
        });
        setIdEditModal(false);
      } catch (error) {
        const err = error as IErrorsProps;
        ModalServices.showMessageError({ message: err.message });
      } finally {
        setIsCreating(false);
      }
    },
    [detailAttribute?.status, dispatch, idEditModal, onRefreshAttributes],
  );

  // effect
  useEffect(() => {
    getAttributes();
  }, [getAttributes]);

  // render
  const createForm = useMemo(() => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: 500,
          padding: '20px',
          height: '100%',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Typography variant="h4">Create Attribute</Typography>
          <IconButton onClick={() => setOpenCreateModal(false)}>
            <XMarkIcon height={32} />
          </IconButton>
        </Box>
        <Box
          sx={{
            // marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}>
          <Input
            placeholder="Input name here"
            label="Name: "
            required
            name="name"
            errorMessage={errors?.name?.message}
            {...{ register }}
          />
        </Box>
        <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
          <Button
            sx={{ width: '40%' }}
            variant="rounded-outlined"
            onClick={() => {
              setOpenCreateModal(false);
            }}>
            Cancel
          </Button>
          <Button
            sx={{ width: '40%' }}
            disabled={!isValid || isCreating}
            onClick={handleSubmit(onCreateAttribute)}>
            Submit
          </Button>
        </Box>
      </Box>
    );
  }, [
    errors?.name?.message,
    handleSubmit,
    isCreating,
    isValid,
    onCreateAttribute,
    register,
  ]);

  const editForm = useMemo(() => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: 500,
          padding: '20px',
          height: '100%',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Typography variant="h4">Edit Attribute</Typography>
          <IconButton
            onClick={() => {
              setIdEditModal(false);
              setDetailAttribute(undefined);
            }}>
            <XMarkIcon height={32} />
          </IconButton>
        </Box>
        {isLoadingDetail ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={150}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Box
              sx={{
                // marginTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}>
              <Input
                placeholder="Input name here"
                label="Name: "
                required
                name="name"
                errorMessage={errors?.name?.message}
                {...{ register }}
              />
            </Box>
            <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
              <Button
                sx={{ width: '40%' }}
                variant="rounded-outlined"
                onClick={() => {
                  setIdEditModal(false);
                }}>
                Cancel
              </Button>
              <Button
                sx={{ width: '40%' }}
                disabled={!isValid}
                onClick={handleSubmit(onEditAttribute)}>
                Submit
              </Button>
            </Box>
          </>
        )}
      </Box>
    );
  }, [
    errors?.name?.message,
    handleSubmit,
    isLoadingDetail,
    isValid,
    onEditAttribute,
    register,
  ]);

  return (
    <>
      <CmsForm
        title="Attribute Page"
        onSearch={onSearch}
        onCreateNew={() => setOpenCreateModal(true)}>
        <Table
          rows={rows}
          columns={columns}
          isShowPagination
          loading={isLoading}
          paginationProps={{
            page: page,
            count: totalItem,
            rowsPerPage: pageSize,
            onPageChange: onLoadMore,
            onRowsPerPageChange: ({ target: { value } }) => {
              setPageSize(+value || 25);
            },
          }}
        />
      </CmsForm>
      <Dialog open={openCreateModal} onClose={() => setOpenCreateModal(false)}>
        {createForm}
      </Dialog>
      <Dialog
        open={!!idEditModal}
        onClose={() => {
          setIdEditModal(false);
          setDetailAttribute(undefined);
        }}>
        {editForm}
      </Dialog>
    </>
  );
};
