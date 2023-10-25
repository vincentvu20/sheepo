import {
  Pagination as MUIPagination,
  PaginationProps,
  Paper,
  SxProps,
} from '@mui/material';

export interface CustomPaginationProps extends PaginationProps {
  currentPage: number;
  totalCount: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  sx?: SxProps;
}

const Pagination = ({
  currentPage,
  totalCount,
  itemsPerPage,
  onPageChange,
  sx,
  ...others
}: CustomPaginationProps) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <Paper>
      <MUIPagination
        count={Math.ceil(totalCount / itemsPerPage)}
        page={currentPage}
        onChange={handleChange}
        sx={sx}
        {...others}
      />
    </Paper>
  );
};

export default Pagination;
