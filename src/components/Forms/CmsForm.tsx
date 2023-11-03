import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { Breadcrumbs, Button, Input } from '..';

export const CmsForm = ({
  title,
  onSearch,
  isLoading,
  children,
  onCreateNew,
}: {
  title: string;
  onCreateNew?: () => void;
  onSearch?: (searchString: string) => void;
  isLoading?: boolean;
  children?: React.ReactNode;
}) => {
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
              inputProps={{ 'aria-label': 'Search' }}
              renderLeadingIcon={<MagnifyingGlassIcon />}
              disableErrorMessage
              contentContainerStyle="min-w-[300px]"
              onChange={e => {
                onSearch?.(e.target.value);
              }}
            />
            <Button
              onClick={onCreateNew}
              variant="rounded-contained"
              className="!min-w-[100px] h-12 !mx-6"
              style={{ textTransform: 'capitalize' }}>
              Create
            </Button>
          </Box>
        </Stack>
      </Grid>
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
