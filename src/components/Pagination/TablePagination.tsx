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
      page={page}
      onPageChange={handleChange}
      rowsPerPage={rowsPerPage}
      sx={sx}
      {...others}
    />
  );
};

export default TablePagination;
