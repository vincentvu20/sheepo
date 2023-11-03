import { Dispatch, SetStateAction, useState } from 'react';
import { Box } from '@mui/material';

interface ColorPickerProps {
  colorList: string[];

}
export const ColorPicker = ({
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
            flexWrap: 'wrap',
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
                      border: '1px solid rgba(0, 0, 0, 0.2) ',
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
