import { Box, Divider } from '@mui/material';
import { FilterCasual, FiterProductUserWeb } from './component';

export const Casual = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap:'nowrap' }}>
        <Divider
          sx={{
            background: 'rgba(0, 0, 0, 0.10)',
            borderTop: '24px',
            mx: '100px',
            my: '134px',
          }}
          variant="middle"
        />
        <FiterProductUserWeb />
        <FilterCasual />
      </Box>
    </>
  );
};
