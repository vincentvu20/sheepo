import { useState } from 'react';
import { Box, Chip } from '@mui/material';

export const ListSize = () => {
  const labelSizeList = [
    { key: '1', label: 'XX-Small' },
    { key: '2', label: 'X-Small' },
    { key: '3', label: 'Small' },
    { key: '4', label: 'Medium' },
    { key: '5', label: 'Large' },
    { key: '6', label: 'X-Large' },
    { key: '7', label: 'XX-Large' },
    { key: '8', label: '3X-Large' },
    { key: '9', label: '4X-Large' },
  ];
  const [selected, setSelected] = useState('');
  const handleSelect = (label: string) => {
    setSelected(label);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px 20px',
        justifycontent: 'center',
        gap: '12px',
        //backgroundColor: 'rgba(240, 240, 240, 1)',
      }}>
      {labelSizeList.map((data, index) => (
        <Chip
          key={data.key + index}
          label={data.label}
          sx={{
            color: selected === data.label ? '#fff' : 'default',
            backgroundColor:
              selected === data.label ? '#000' : 'rgba(240, 240, 240, 1)',
          }}
          onClick={() => handleSelect(data.label)}
        />
      ))}
    </Box>
  );
};
