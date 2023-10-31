import { Box } from '@mui/material';
import { Collapse } from '@/components';

export const ListStyle = () => {
  return (
    <Box
      sx={{
        marginBottom: '24px',
        width: '247px',
        height: '160px',
        gap: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Collapse children={'1'} title={'Casual'}></Collapse>
      <Collapse children={'undefined'} title={'Formal'}></Collapse>
      <Collapse children={'undefined'} title={'Party'}></Collapse>
      <Collapse children={'undefined'} title={'Gym'}></Collapse>
    </Box>
  );
};
