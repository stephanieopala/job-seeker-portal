import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  // getPaginationRowModel,
  useReactTable,
  PaginationState,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import DataTablePagination from './data-table-pagination';
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  rowCount: number;
  pagination: PaginationState;
  setPagination: (
    updater: PaginationState | ((prev: PaginationState) => PaginationState)
  ) => void;
}

function DataTable<TData, TValue>({
  columns,
  data,
  rowCount,
  pagination,
  setPagination,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    rowCount,
    state: { pagination },
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    // getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  });
  return (
    <div className="h-full flex flex-col justify-between">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-dark-gray">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
              className="border-dark-gray"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DataTablePagination table={table} setPagination={setPagination} />
    </div>
  );
}

export default DataTable;
