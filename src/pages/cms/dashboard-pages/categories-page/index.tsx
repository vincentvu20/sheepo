import { useCallback, useEffect, useMemo, useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { useDebounce } from 'use-debounce';
import { Button, CmsForm, Column, Input, Table } from '@/components';
import { useAppDispatch } from '@/hooks/common-hook';
import { createCategory, getListCategory } from '@/redux/slices';
import { ModalServices } from '@/services/modal-service';
import { ICategory, ICreateCategory } from '@/types/category.types';
import { IErrorsProps } from '@/types/common-global.types';
import { DateUtils } from '@/utils/date.utils';
import DialogFormCategory from './components/DialogFormCategories';
// import { DialogFormCategories } from './components/DialogFormCategories';

export const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openCreateDrawer, setOpenCreateDrawer] = useState(false);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);
  const [totalItem, setTotalItem] = useState<number>(0);
  const [searchStr, setSearchStr] = useState<string>('');
  const [debounceContent] = useDebounce(searchStr, 500);
  const [_, setId] = useState<number>();
  // const [category, setCategory] = useState<ICategory>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });

  const fetchCategoryList = useCallback(async () => {
    try {
      const { data, totalItem } = await dispatch(
        getListCategory({
          page,
          pageSize,
          sortOrder: 'desc',
          sortBy: 'created_at',
          content: debounceContent ? debounceContent : undefined,
        }),
      ).unwrap();

      setCategories(data as ICategory[]);
      setTotalItem(totalItem);
    } catch (error: any) {
      ModalServices.showMessageError({ message: error.message });
    }
  }, [dispatch, page, pageSize, debounceContent]);

  // const fetchDetailCategory = useCallback(async () => {
  //   try {
  //     if (id) {
  //       const { data } = await dispatch(getDetailCategory(id)).unwrap();
  //       setCategory(data as ICategory);
  //     }
  //   } catch (error: any) {
  //     ModalServices.showMessageError({ message: error.message });
  //   }
  // }, [dispatch, id]);

  useEffect(() => {
    fetchCategoryList();
  }, [fetchCategoryList]);

  // const onEdit = (id: string) => {
  //   setId(+id);
  //   return () => {
  //     setOpenEditDrawer(true);
  //   };
  // };

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

  const handleSearch = (content: string) => setSearchStr(content);

  const columns: Column[] = [
    {
      id: 'index',
      label: 'ID',
      width: '20%',
    },
    {
      id: 'name',
      label: 'Name',
      width: '50%',
      align: 'left',
    },
    {
      id: 'created_at',
      label: 'Create At',
      width: '15%',
      align: 'left',
      render: (row: any) => DateUtils.formatString(row.created_at),
    },
    {
      id: 'status',
      label: 'Status',
      width: '15%',
      align: 'left',
    },
    {
      id: 'action',
      label: 'Action',
      width: '10%',
      align: 'center',
      render: (row: any) => {
        return (
          <Box display="flex" flexDirection="row">
            <IconButton color="primary" onClick={() => setShowModal(true)}>
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

  const handleCreate = handleSubmit(async data => {
    try {
      setIsLoading(true);
      await dispatch(createCategory(data as ICreateCategory)).unwrap();
      ModalServices.showMessageSuccess({
        message: 'Create category successfully',
      });
      await fetchCategoryList();
      setOpenCreateDrawer(false);
      reset();
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  });

  // const handleUpdate = handleSubmit(async data => {
  //   try {
  //     const dataUpdate = data as IUpdateCategory;
  //     setIsLoading(true);
  //     await dispatch(
  //       updateCategory({
  //         id,
  //         data: dataUpdate,
  //       }),
  //     ).unwrap();
  //     ModalServices.showMessageSuccess({
  //       message: 'Update category successfully',
  //     });
  //     await fetchCategoryList();
  //     setOpenCreateDrawer(false);
  //     reset();
  //   } catch (error) {
  //     const err = error as IErrorsProps;
  //     ModalServices.showMessageError({ message: err.message });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // });

  const createData = useCallback((category: ICategory, index: number) => {
    return {
      id: category.id,
      index,
      name: category.name,
      status: category.status,
      created_at: category.created_at,
    };
  }, []);

  const rows = useMemo<any>(() => {
    return categories.map((category, index) => createData(category, index + 1));
  }, [createData, categories]);

  const renderCreateForm = useMemo(() => {
    return (
      <Box
        sx={{
          minWidth: 500,
          padding: '20px',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        }}>
        <Typography variant="h4">Create Category</Typography>
        <div className="flex flex-1 flex-col justify-between mt-5">
          <div>
            <Input
              placeholder="Name"
              label="Name"
              required
              register={register}
              name="name"
            />
          </div>
          <Button
            disabled={isLoading}
            onClick={handleCreate}
            className="w-full">
            Submit
          </Button>
        </div>
      </Box>
    );
  }, [handleCreate, isLoading, register]);

  const renderEditForm = useMemo(() => {
    return (
      <Box sx={{ minWidth: 500 }}>
        <Typography variant="h4">Category Detail</Typography>
      </Box>
    );
  }, []);

  return (
    <>
      <CmsForm
        title="Category Page"
        onCreateNew={() => setOpenCreateDrawer(true)}
        onSearch={handleSearch}>
        <Table
          rows={rows}
          columns={columns}
          isShowPagination
          paginationProps={{
            page,
            count: totalItem,
            rowsPerPage: pageSize,
            onPageChange: page => setPage(page),
            onRowsPerPageChange: event => setPageSize(+event.target.value),
          }}
        />
      </CmsForm>
      {/* <DialogFormCategories
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type="create"
      /> */}
      <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={openCreateDrawer}
          onClose={() => setOpenCreateDrawer(false)}>
          {renderCreateForm}
        </Drawer>
        <Drawer
          anchor="right"
          open={openEditDrawer}
          onClose={() => setOpenEditDrawer(false)}>
          {renderEditForm}
        </Drawer>
        <DialogFormCategory
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          type="edit"
        />
      </React.Fragment>
    </>
  );
};
