import {
  Paper,
  SxProps,
  Table as MUITable,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableHead,
  TableOwnProps,
  TableRow,
} from '@mui/material';
import TablePagination, {
  CustomTablePaginationProps,
} from '../Pagination/TablePagination';

interface Column extends TableCellProps {
  id: string;
  label: string;
  minWidth?: number;
  format?: (value: number) => string | React.ReactElement;
  render?: (value: string[]) => React.ReactElement;
}

export interface TableProps extends TableOwnProps {
  columns: Column[];
  rows: any[];
  tableSx?: SxProps;
  cellSx?: SxProps;
  rowSx?: SxProps;
  isShowPagination?: boolean;
  paginationProps?: CustomTablePaginationProps;
  loading?: boolean;
}

export const Table = ({
  paginationProps,
  columns,
  rows,
  tableSx,
  cellSx,
  rowSx,
  isShowPagination = true,
  loading,
  ...props
}: TableProps) => {
  let paginationComponent;
  if (isShowPagination && paginationProps) {
    const { page, count, rowsPerPage, onPageChange, sx, ...others } =
      paginationProps;
    paginationComponent = (
      <TablePagination
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        sx={sx}
        {...others}
      />
    );
  }

  const TableContent = (
    <MUITable {...props} sx={tableSx}>
      <TableHead>
        <TableRow sx={rowSx}>
          {columns.map(column => (
            <TableCell
              key={column.id}
              align={column.align}
              sx={cellSx}
              style={
                column?.minWidth ? { minWidth: column.minWidth } : undefined
              }>
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, rowIndex) => {
          return (
            <TableRow sx={rowSx} key={rowIndex}>
              {columns.map((column, columnIndex) => {
                const value = row[column.id];
                return (
                  <TableCell
                    {...column}
                    key={columnIndex}
                    sx={cellSx}
                    align={column?.align}>
                    {column?.format
                      ? column.format(value)
                      : column?.render
                      ? column.render(value)
                      : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MUITable>
  );

  return (
    <Paper>
      <TableContainer>{loading ? <>Loading</> : TableContent}</TableContainer>
      {paginationComponent}
    </Paper>
  );
};
