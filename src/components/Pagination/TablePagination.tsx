import {
  SxProps,
  TablePagination as MUITablePagination,
  TablePaginationOwnProps,
} from '@mui/material';

export interface CustomTablePaginationProps
  extends Omit<TablePaginationOwnProps, 'onPageChange'> {
  page: number;
  count: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  sx?: SxProps;
}

const TablePagination = ({
  page,
  count,
  rowsPerPage,
  onPageChange,
  sx,
  ...others
}: CustomTablePaginationProps) => {
  const handleChange = (_event: React.MouseEvent | null, page: number) => {
    onPageChange(page);
  };

  return (
    <MUITablePagination
      component="div"
      count={count}
      page={page - 1 <= 0 ? 0 : page - 1}
      onPageChange={handleChange}
      rowsPerPage={rowsPerPage}
      sx={{
        '& .MuiTablePagination-input': {
          fontSize: 24,
        },
        '& .MuiTablePagination-selectLabel': {
          fontSize: 18,
          fontWeight: 400,
        },
        '& .MuiTablePagination-displayedRows': {
          fontSize: 18,
          fontWeight: 400,
        },
        ...sx,
      }}
      {...others}
    />
  );
};

export default TablePagination;
