import React, { ReactNode } from 'react';
import { Column } from 'primereact/column';
import { DataTable, DataTableProps } from 'primereact/datatable';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

type PropsType = {
  children?: React.ReactNode;
};

const paginatorRight = (): ReactNode => (
  <div className="flex items-center gap-8">
    <label htmlFor="paginator-input-current-page">Pergi ke Halaman</label>
    <InputNumber
      inputId="paginator-input-current-page"
      pt={{ input: { root: { className: 'w-16' } } }}
    />
  </div>
);

function TableCollection(props: DataTableProps<any[]> & PropsType) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-5">
        <span>Tampilkan</span>
        <Dropdown
          value={props.rows ?? 5}
          options={props.rowsPerPageOptions ?? [5, 10, 15]}
          pt={{ input: { className: 'w-12' } }}
        />
        <span>baris/halaman</span>
      </div>
      <DataTable
        showGridlines
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        currentPageReportTemplate="Menampilkan {first} sampai {last} dari {totalRecords} baris data"
        paginatorRight={paginatorRight()}
        rows={5}
        pt={{
          wrapper: { className: 'border border-silver-400' },
          headerRow: (e) => ({
            className: ['[&>th>div]:justify-center', e?.props.showGridlines ? '[&>th]:border [&>th]:border-silver-400' : '']
          }),
          bodyRow: (e) => ({ className: [e?.props.showGridlines ? '[&>td]:border [&>td]:border-silver-400' : ''] }),
          paginator: {
            root: { className: 'py-5 bg-transparent' },
            firstPageButton: { className: 'ml-auto' },
            end: { className: 'ml-10' },
            pageButton: { className: 'bg-red-500 text-white' }
          }
        }}
        {...props}
      >
        {props.selectionMode && (
          <Column
            selectionMode={props.selectionMode === 'multiple' ? 'multiple' : 'single'}
            headerStyle={{ width: '3rem' }}
          />
        )}
        <Column
          header="No."
          headerStyle={{ width: '3rem' }}
          body={(_, props) => props.rowIndex + 1}
        />
        {props.expandedRows && (
          <Column
            expander
            headerStyle={{ width: '3rem' }}
          />
        )}
        {props.children}
      </DataTable>
    </div>
  );
}

export default TableCollection;
