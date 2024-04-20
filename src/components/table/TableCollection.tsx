import { ReactNode } from 'react';
import { Column } from 'primereact/column';
import { DataTable, DataTableProps } from 'primereact/datatable';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

type PropsType = {
  rootSelectionMode?: DataTableProps<any[]>['selectionMode'];
  children?: ReactNode;
  action?: () => ReactNode | ReactNode;
  page?: number;
  onRowsChange?: (e: DropdownChangeEvent) => void;
};

function TableCollection(props: DataTableProps<any[]> & PropsType) {
  const { action, rootSelectionMode, onRowsChange, selectionMode, ...tableProps } = props;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span>Tampilkan</span>
          <Dropdown
            value={props.rows}
            onChange={onRowsChange}
            options={props.rowsPerPageOptions ?? [5, 10, 15]}
            pt={{ input: { className: 'w-12' } }}
          />
          <span>baris/halaman</span>
        </div>
        {typeof action === 'function' ? action() : action}
      </div>
      <DataTable
        showGridlines
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageInput"
        currentPageReportTemplate="Menampilkan {first} sampai {last} dari {totalRecords} baris data"
        selectionMode={rootSelectionMode as any}
        pt={{
          wrapper: { className: 'border border-silver-400' },
          headerRow: (e) => ({
            className: ['[&>th>div]:justify-center', e?.props.showGridlines ? '[&>th]:border [&>th]:border-silver-400' : '']
          }),
          thead: { className: '[&>tr>th]:text-nowrap' },
          tbody: (e) => ({ className: [e?.props.showGridlines ? '[&>tr>td]:border [&>tr>td]:border-silver-400' : ''] }),
          paginator: {
            root: { className: 'py-5 bg-transparent' },
            firstPageButton: { className: 'ml-auto' },
            end: { className: 'ml-10' },
            pageButton: (e) => ({ className: [e?.context.active ? 'bg-red-500 text-white' : ''] }),
            JTPInput: { root: { className: 'before:content-["Pergi_ke_Halaman"] flex items-center gap-3' } }
          }
        }}
        {...tableProps}
      >
        {selectionMode && (
          <Column
            selectionMode={selectionMode === 'multiple' ? 'multiple' : 'single'}
            headerStyle={{ width: '3rem' }}
          />
        )}
        <Column
          header="No."
          headerStyle={{ width: '3rem' }}
          body={(_, props) => props.rowIndex + 1}
        />
        {tableProps.expandedRows && (
          <Column
            expander
            headerStyle={{ width: '3rem' }}
          />
        )}
        {tableProps.children}
      </DataTable>
    </div>
  );
}

export default TableCollection;
