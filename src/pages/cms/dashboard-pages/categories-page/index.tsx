import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, IconButton } from '@mui/material';
import { useDebounce } from 'use-debounce';
import { schemaCreateCategoryCms } from '@/common';
import { CmsForm, Column, Input, Table } from '@/components';
import { useAppDispatch } from '@/hooks/common-hook';
import {
  createCategory,
  deleteCategory,
  getDetailCategory,
  getListCategory,
  updateCategory,
} from '@/redux/slices';
import { ModalServices } from '@/services/modal-service';
import {
  ICategory,
  ICreateCategory,
  IUpdateCategory,
} from '@/types/category.types';
import { IErrorsProps, IUpdate } from '@/types/common-global.types';
import { DateUtils } from '@/utils/date.utils';

export const CategoriesPage = () => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [totalCategory, setTotalCategory] = useState<number>(0);
  const [searchStr, setSearchStr] = useState<string>('');
  const [debounceContent] = useDebounce(searchStr, 500);

  const createCategoryForm = useForm({
    shouldUseNativeValidation: true,
    resolver: yupResolver(schemaCreateCategoryCms),
  });

  const editCategoryForm = useForm({
    shouldUseNativeValidation: true,
  });

  const fetchCategoryList = useCallback(async () => {
    try {
      const { data, totalItem } = await dispatch(
        getListCategory({
          page,
          pageSize,
          content: debounceContent ? debounceContent : undefined,
          sortBy: 'created_at',
          sortOrder: 'desc',
        }),
      ).unwrap();
      setCategories(data as ICategory[]);
      setTotalCategory(totalItem);
    } catch (error: any) {
      ModalServices.showMessageError({ message: error.message });
    }
  }, [debounceContent, dispatch, page, pageSize]);

  const handleCreate = async (data: ICreateCategory) => {
    try {
      setIsLoading(true);
      await dispatch(createCategory(data as ICreateCategory)).unwrap();
      ModalServices.showMessageSuccess({
        message: 'Create category successfully',
      });
      createCategoryForm.reset();
      await fetchCategoryList();
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      await dispatch(updateCategory(data as IUpdate<IUpdateCategory>)).unwrap();
      ModalServices.showMessageSuccess({
        message: 'Update category successfully',
      });
      editCategoryForm.reset();
      await fetchCategoryList();
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setIsLoading(true);
      await dispatch(deleteCategory(id)).unwrap();
      ModalServices.showMessageSuccess({
        message: 'Delete category successfully',
      });
      await fetchCategoryList();
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, [fetchCategoryList]);

  const handleSearch = (content: string) => setSearchStr(content);

  const handleClickDelete = (id: number) => {
    return () => {
      ModalServices.showConfirmModal({
        title: 'Are you sure?',
        message: 'Are you sure delete this category?',
        onConfirm: () => handleDelete(id),
        onCancel: () => {},
      });
    };
  };

  const handleClickCreate = () => {
    const createForm = (
      <div className=" flex flex-1 flex-col justify-between pr-7 pl-7">
        <div>
          <Input
            placeholder="Name"
            label="Name"
            required
            register={createCategoryForm.register}
            name="name"
          />
        </div>
      </div>
    );
    ModalServices.showFormModal({
      sx: {
        minWidth: 500,
        borderRadius: 10,
      },
      loading: isLoading,
      title: 'Create Category',
      submitTitle: 'Submit',
      onConfirm: createCategoryForm.handleSubmit(handleCreate),
      onCancel: () => {
        createCategoryForm.reset();
      },
      children: createForm,
    });
  };

  const handleClickEdit = (id: number) => {
    return async () => {
      try {
        const data = await dispatch(getDetailCategory(id)).unwrap();
        editCategoryForm.setValue('id', id);
        const detailForm = (
          <div className=" flex flex-1 flex-col justify-between pr-7 pl-7">
            <div>
              <Input
                placeholder="Name"
                label="Name"
                required
                defaultValue={data?.name}
                register={editCategoryForm.register}
                name="data.name"
              />
              <Input
                placeholder="Status"
                label="Status"
                defaultValue={data?.status}
                required
                register={editCategoryForm.register}
                name="data.status"
              />
            </div>
          </div>
        );
        ModalServices.showFormModal({
          sx: {
            minWidth: 500,
            borderRadius: 10,
          },
          loading: isLoading,
          title: 'Category',
          submitTitle: 'Submit',
          onConfirm: editCategoryForm.handleSubmit(handleUpdate),
          onCancel: editCategoryForm.reset,
          children: detailForm,
        });
      } catch (error: any) {
        ModalServices.showMessageError({ message: error.message });
      }
    };
  };

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
      label: 'Created At',
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
            <IconButton color="primary" onClick={handleClickEdit(row.id)}>
              <PencilSquareIcon height={24} />
            </IconButton>

            <IconButton color="error" onClick={handleClickDelete(row.id)}>
              <TrashIcon height={24} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const rows = categories?.length
    ? categories.map((category, index) => ({
        id: category.id,
        index,
        name: category.name,
        status: category.status,
        created_at: category.created_at,
      }))
    : [];

  return (
    <>
      <CmsForm
        title="Category Page"
        onCreateNew={handleClickCreate}
        onSearch={handleSearch}>
        <Table
          rows={rows}
          columns={columns}
          isShowPagination
          paginationProps={{
            page,
            count: totalCategory,
            rowsPerPage: pageSize,
            onPageChange: page => setPage(page + 1),
            onRowsPerPageChange: event => setPageSize(+event.target.value),
          }}
        />
      </CmsForm>
    </>
  );
};
