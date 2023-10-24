import { Dispatch, SetStateAction, useState } from 'react';
import { Box } from '@mui/material';

const ColorPicker = ({
  colorList,
  setBackgroundColor,
}: {
  colorList: string[];
  setBackgroundColor: Dispatch<SetStateAction<string>>;
}) => {
  const [color, setColor] = useState<string>();
  return (
    <>
      <Box>
        <Box
          sx={{
            width: '260px',
            p: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
          {colorList?.map(item => (
            <Box
              sx={
                item === color
                  ? {
                      width: '37px',
                      height: '37px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      background: item,
                      position: 'relative',
                      '&.MuiBox-root': {
                        '&::before': {
                          content: '"✓"',
                          position: 'absolute',
                          color: '#fff',
                          left: '12px',
                          top: '5px',
                        },
                      },
                    }
                  : {
                      width: '37px',
                      height: '37px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      background: item,
                      position: 'relative',
                    }
              }
              onClick={() => {
                setColor(item);
                setBackgroundColor(item);
              }}></Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ColorPicker;
