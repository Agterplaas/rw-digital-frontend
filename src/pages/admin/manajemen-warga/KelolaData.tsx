import { useState } from 'react';
import { FormFilterInterface } from '@/shared/pages/admin/manajemen-warga/kelola-data/interface';
import AdminPage from '@/layouts/AdminPage';
import FormFilter from '@/shared/pages/admin/manajemen-warga/kelola-data/partials/FormFilter';
import entity from '@/shared/pages/admin/manajemen-warga/kelola-data/entity';
import TableCollection from '@/components/table/TableCollection';
import { Column } from 'primereact/column';

const dummy = [
  { id: 1, nik: 1234 },
  { id: 2, nik: 23298 }
];

function KelolaData() {
  const { filter } = entity();
  const [formFilter, setFormFilter] = useState<FormFilterInterface>(filter);
  const [selection, setSelection] = useState<any[]>([]);
  const [expandedRows, setExpandedRows] = useState<any[]>([]);

  return (
    <AdminPage>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">Kelola Data</h1>
        <FormFilter
          formFilter={formFilter}
          setFormFilter={setFormFilter}
        />
        <hr className="bg-silver-400 pt-[3px]" />
        <TableCollection
          value={dummy}
          dataKey="id"
          selectionMode="multiple"
          selection={selection}
          onSelectionChange={(e) => setSelection(e.value)}
          expandedRows={expandedRows}
        >
          <Column
            header="NIK"
            field="nik"
          />
          <Column
            header="Nama Lengkap"
            field="nama_lengkap"
          />
          <Column
            header="Alamat KTP"
            field="alamat_ktp"
          />
          <Column
            header="RT"
            field="rt"
          />
          <Column
            header="BLOK"
            field="blok"
          />
          <Column
            header="Nomor"
            field="nomor"
          />
          <Column
            header="Status Kawin"
            field="status_kawin"
          />
          <Column header="Aksi" />
        </TableCollection>
      </div>
    </AdminPage>
  );
}

export default KelolaData;
