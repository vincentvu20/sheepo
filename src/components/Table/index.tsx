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

export interface Column extends TableCellProps {
  id: string;
  label: string;
  minWidth?: number | string;
  width?: number | string;
  format?: (value: number) => string | React.ReactElement;
  render?: (value: string[]) => React.ReactNode;
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
        sx={{ fontFamily: 'sans-serif', color: '' }}
        {...others}
      />
    );
  }

  const renderLoading = () => {
    if (loading) {
      return columns.map(column => {
        if (!column.label) {
          return <></>;
        }
        return (
          <TableCell
            key={column.id}
            align={column.align}
            sx={cellSx}
            style={{
              ...(column.width ? { width: column.width } : {}),
              ...(column.minWidth ? { minWidth: column.minWidth } : {}),
            }}>
            <div role="status" className="animate-pulse">
              <div className="h-5 bg-gray-200 rounded-[4px] w-[70%]"></div>
            </div>
          </TableCell>
        );
      });
    }
    return <></>;
  };

  const TableContent = (
    <MUITable {...props} sx={tableSx}>
      <TableHead>
        <TableRow sx={rowSx}>
          {columns.map(column => (
            <TableCell
              key={column.id}
              align={column.align}
              sx={{ fontWeight: 600, ...cellSx }}
              style={{
                ...(column.width ? { width: column.width } : {}),
                ...(column.minWidth ? { minWidth: column.minWidth } : {}),
              }}>
              {column.label}
            </TableCell>
          ))}
        </TableRow>
        {Array(10)
          .fill(1)
          .map((_, idx) => {
            return <TableRow key={idx}>{renderLoading()}</TableRow>;
          })}
      </TableHead>
      {loading ? (
        <></>
      ) : (
        <TableBody>
          {rows.map((row, rowIndex) => {
            return (
              <TableRow sx={rowSx} key={`${row}${rowIndex}`}>
                {columns.map((column, columnIndex) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      {...column}
                      key={columnIndex}
                      sx={{ fontWeight: 400, ...cellSx }}
                      align={column?.align}>
                      {column?.format
                        ? column.format(value)
                        : column?.render
                        ? column.render(row)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      )}
    </MUITable>
  );

  return (
    <Paper>
      <TableContainer>{TableContent}</TableContainer>
      {paginationComponent}
    </Paper>
  );
};
