import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Chip,
  Dialog,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { schemaCreateAttribute } from '@/common/utils/schema';
import { Button, CmsForm, Column, Input, Table } from '@/components';
import { useAppDispatch, useAppSelector, useTheme } from '@/hooks/common-hook';
import { IPayloadCreateAttribute } from '@/models/attribute.model';
import {
  createAttribute,
  getListAttribute,
} from '@/redux/slices/attribute-slice';
import { ModalServices } from '@/services/modal-service';
import { DefaultStatus, IErrorsProps } from '@/types/common-global.types';

export const AttributesPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaCreateAttribute),
  });

  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const { attributes = [] } = useAppSelector(state => state.attribute);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [anchorElStatus, setAnchorElStatus] = useState<null | HTMLElement>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [totalItem, setTotalItem] = useState(0);

  const openMenuStatus = Boolean(anchorElStatus);
  const handleClickStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElStatus(event.currentTarget);
  };
  const handleCloseMenuStatus = () => {
    setAnchorElStatus(null);
  };

  const handleChangeStatus = (status: `${DefaultStatus}`) => {
    return () => {
      console.log('status => ', status);
      setAnchorElStatus(null);
    };
  };

  const getAttributes = useCallback(async () => {
    try {
      setIsLoading(true);
      const { totalItem, page: pageRes } = await dispatch(
        getListAttribute({ pageSize, page: 1 }),
      ).unwrap();
      setTotalItem(totalItem);
      setPage(pageRes);
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError(err);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, pageSize]);

  const onLoadMore = useCallback(
    async (page: number) => {
      try {
        // setPage(prev => prev + 1);
        setIsLoading(true);
        const { totalItem, page: pageRes } = await dispatch(
          getListAttribute({ pageSize, page: page + 1 }),
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
    [dispatch, pageSize],
  );

  const onEdit = (_: string) => {
    return () => {
      setOpenEditModal(true);
    };
  };

  const onDelete = (_: string) => {
    return () => {
      ModalServices.showConfirmModal({
        title: 'Are you sure?',
        message: 'Are you sure delete this attribute?',
        onConfirm: () => {},
        onCancel: () => {},
      });
    };
  };

  const columns: Column[] = [
    {
      id: 'id',
      label: 'ID',
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
    },
    {
      id: 'status',
      label: 'Status',
      width: '10%',
      align: 'left',
      render: (row: any) => {
        return (
          <div>
            <button
              onClick={handleClickStatus}
              id="basic-button"
              aria-controls={openMenuStatus ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenuStatus ? 'true' : undefined}>
              <Chip
                label={row.status}
                color={
                  row.status === DefaultStatus.Active ? 'success' : 'error'
                }
              />
            </button>
            <Menu
              elevation={1}
              id="basic-menu"
              anchorEl={anchorElStatus}
              open={openMenuStatus}
              onClose={handleCloseMenuStatus}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}>
              <MenuItem onClick={handleChangeStatus('active')}>
                <Typography color={colors.success}>Active</Typography>
              </MenuItem>
              <MenuItem onClick={handleChangeStatus('inactive')}>
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
    (attribute: { type: string; name: string; id: string; status: string }) => {
      return {
        id: attribute.id,
        name: attribute.name,
        status: attribute.status,
        type: attribute.type,
      };
    },
    [],
  );

  const rows = useMemo<any>(() => {
    return attributes.map(attribute => createDataTableRow(attribute));
  }, [attributes, createDataTableRow]);

  const onCreateAttribute = useCallback(
    async (data: IPayloadCreateAttribute) => {
      try {
        setIsCreating(true);
        await dispatch(createAttribute(data)).unwrap();
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
    [dispatch],
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
          <IconButton onClick={() => setOpenEditModal(false)}>
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
              setOpenEditModal(false);
            }}>
            Cancel
          </Button>
          <Button
            sx={{ width: '40%' }}
            disabled={!isValid}
            onClick={handleSubmit(onCreateAttribute)}>
            Submit
          </Button>
        </Box>
      </Box>
    );
  }, [
    errors?.name?.message,
    handleSubmit,
    isValid,
    onCreateAttribute,
    register,
  ]);

  return (
    <>
      <CmsForm
        title="Attribute Page"
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
              // console.log('event => ', event);
              setPageSize(+value || 25);
            },
          }}
        />
      </CmsForm>
      <Dialog open={openCreateModal} onClose={() => setOpenCreateModal(false)}>
        {createForm}
      </Dialog>
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        {editForm}
      </Dialog>
    </>
  );
};
