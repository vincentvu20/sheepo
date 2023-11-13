import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import DialogFormCategory from '@/pages/cms/dashboard-pages/categories-page/components/DialogFormCategories';
import { Breadcrumbs, Button, Input } from '..';

export const CmsForm = ({
  title,
  onSearch,
  isLoading,
  children,
}: {
  title: string;
  onCreateNew?: () => void;
  onSearch?: (searchString: string) => void;
  isLoading?: boolean;
  children?: React.ReactNode;
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Grid item sm={12} lg={12}>
        <Breadcrumbs />
        <Stack direction="row" alignItems="center">
          <Typography variant="h3">{title}</Typography>
          <Box
            ml="auto"
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Input
              id="outlined-search"
              placeholder="Search"
              type="search"
              inputProps={{ 'aria-label': 'Tìm kiếm' }}
              renderLeadingIcon={<MagnifyingGlassIcon />}
              disableErrorMessage
              contentContainerStyle="min-w-[600px]"
              onChange={e => {
                onSearch?.(e.target.value);
              }}
            />
            <Button
              onClick={() => setShowModal(true)}
              className="!min-w-[100px] h-10 !ml-6 !rounded-lg !shadow-none"
              style={{ textTransform: 'none' }}>
              Create
            </Button>
          </Box>
        </Stack>
      </Grid>
      <DialogFormCategory
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type="create"
      />
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="mt-12">{children}</div>
      )}
    </>
  );
};
