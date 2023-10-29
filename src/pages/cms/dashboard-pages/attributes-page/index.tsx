import { useCallback, useMemo, useState } from 'react';
import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { CmsForm, Column, Table } from '@/components';
import { ModalServices } from '@/services/modal-service';
import { ATTRIBUTES } from './__mocks__/data';

export const AttributesPage = () => {
  const [openCreateDrawer, setOpenCreateDrawer] = useState(false);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);

  const onEdit = (id: string) => {
    return () => {
      setOpenEditDrawer(true);
    };
  };

  const onDelete = (id: string) => {
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

  // render
  const renderCreateForm = useMemo(() => {
    return (
      <Box sx={{ minWidth: 500 }}>
        <Typography variant="h4">Create Attribute</Typography>
      </Box>
    );
  }, []);

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
