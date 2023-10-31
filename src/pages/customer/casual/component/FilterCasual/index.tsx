import React from 'react';
import './style.css';
import { Box } from '@mui/material';
import { Button, Collapse, ColorPicker } from '@/components';

export const FilterCasual = () => {
  return (
    <Box sx={{}}>
      <Box sx={{ display: 'flex', flexWrap: 'nowrap', flex: '1' }}>
        <p className="text">Casual</p>
        <p>Showing 1-10 of 100 Products</p>
        <Box sx={{ }}>
          <p>Sort by:</p>
          <Collapse children="abc" title="Most Popular" />
        </Box>
      </Box>
    </Box>
  );
};
