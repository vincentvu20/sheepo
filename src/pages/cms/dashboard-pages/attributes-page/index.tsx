import { useCallback, useMemo, useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { schemaCreateAttribute } from '@/common/utils/schema';
import { Button, CmsForm, Column, Input, Table } from '@/components';
import { useAppDispatch } from '@/hooks/common-hook';
import { IPayloadCreateAttribute } from '@/models/attribute.model';
import { createAttribute } from '@/redux/slices/attribute-slice';
import { ModalServices } from '@/services/modal-service';
import { IErrorsProps } from '@/types/common-global.types';
import { ATTRIBUTES } from './__mocks__/data';

export const AttributesPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaCreateAttribute),
  });

  const dispatch = useAppDispatch();
  const [openCreateDrawer, setOpenCreateDrawer] = useState(false);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [_, setIsCreating] = useState(false);

  const onEdit = (_: string) => {
    return () => {
      setOpenEditDrawer(true);
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
      id: 'content',
      label: 'Content',
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

  const createData = useCallback(
    (attribute: {
      type: string;
      content: string;
      id: string;
      status: string;
    }) => {
      return {
        id: attribute.id,
        content: attribute.content,
        status: attribute.status,
        type: attribute.type,
      };
    },
    [],
  );

  const rows = useMemo<any>(() => {
    return ATTRIBUTES.map(attribute => createData(attribute));
  }, [createData]);

  const onCreateAttribute = useCallback(
    async (data: IPayloadCreateAttribute) => {
      try {
        setIsCreating(true);
        await dispatch(createAttribute(data)).unwrap();
        ModalServices.showMessageSuccess({
          message: 'Attribute created successfully',
        });
        setOpenCreateDrawer(false);
      } catch (error) {
        const err = error as IErrorsProps;
        ModalServices.showMessageError({ message: err.message });
      } finally {
        setIsCreating(false);
      }
    },
    [dispatch],
  );

  // render
  const renderCreateForm = useMemo(() => {
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
          <IconButton onClick={() => setOpenCreateDrawer(false)}>
            <XMarkIcon height={32} />
          </IconButton>
        </Box>
        <Box
          sx={{
            marginTop: '20px',
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
          {/* <Input
            placeholder="Input type here"
            label="Type: "
            required
            name="type"
            errorMessage={errors?.type?.message}
            {...{ register }}
          /> */}
        </Box>
        <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
          <Button
            sx={{ width: '40%' }}
            variant="rounded-outlined"
            onClick={() => {
              setOpenCreateDrawer(false);
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

  const renderEditForm = useMemo(() => {
    return (
      <Box sx={{ minWidth: 500 }}>
        <Typography variant="h4">Attribute detail</Typography>
      </Box>
    );
  }, []);

  return (
    <>
      <CmsForm
        title="Attribute Page"
        onCreateNew={() => setOpenCreateDrawer(true)}>
        <Table
          rows={rows}
          columns={columns}
          isShowPagination
          paginationProps={{
            page: 0,
            count: 100,
            rowsPerPage: 25,
            onPageChange: () => {},
          }}
        />
      </CmsForm>
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
      </React.Fragment>
    </>
  );
};
