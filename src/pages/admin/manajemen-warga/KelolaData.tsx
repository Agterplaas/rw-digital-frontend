import { Column } from 'primereact/column';
import { FormFilterInterface, WargaInterface } from '@/shared/pages/admin/manajemen-warga/kelola-data/interface';
import { ReactNode, useEffect, useState } from 'react';
import AdminPage from '@/layouts/AdminPage';
import ButtonAdd from '@/components/button/Add';
import ButtonDelete from '@/components/button/Delete';
import ButtonEdit from '@/components/button/Edit';
import ButtonPrintExcel from '@/components/button/PrintExcel';
import entity from '@/shared/pages/admin/manajemen-warga/kelola-data/entity';
import FormFilter from '@/shared/pages/admin/manajemen-warga/kelola-data/partials/FormFilter';
import TableCollection from '@/components/table/TableCollection';
import WargaService from '@/services/warga.service';
import fetchUtil from '@/utils/FetchUtils';
import FetchInterface from '@/interfaces/fetch';

const columnAksiBodyTemplate = (): ReactNode => (
  <div className="flex justify-center gap-2">
    <ButtonDelete iconOnly />
    <ButtonEdit iconOnly />
  </div>
);

const actionTemplate = (): ReactNode => (
  <div className="flex gap-3">
    <ButtonDelete />
    <ButtonPrintExcel outlined />
    <ButtonAdd outlined />
  </div>
);

const rowExpansionTemplate = (warga: WargaInterface | null): ReactNode => (
  <div className="w-full overflow-x-auto">
    <table className="w-full border-separate border-spacing-x-10">
      <thead>
        <tr className="[&>th]:text-nowrap [&>th]:font-normal [&>th]:text-black">
          <th>Tanggal Lahir</th>
          <th>Tempat Lahir</th>
          <th>Umur</th>
          <th>Jenis Kelamin</th>
          <th>Agama</th>
          <th>Pekerjaan</th>
          <th>Catatan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{warga?.tgl_lahir}</td>
          <td>{}</td>
          <td>{warga?.usia}</td>
          <td>{warga?.jenis_kelamin}</td>
          <td>{warga?.agama}</td>
          <td>{warga?.pekerjaan}</td>
          <td>{warga?.catatan}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

function KelolaData() {
  const { filter } = entity();
  const [warga, setWarga] = useState<FetchInterface<WargaInterface[]> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formFilter, setFormFilter] = useState<FormFilterInterface>(filter);
  const [selection, setSelection] = useState<any[]>([]);
  const [expandedRows, setExpandedRows] = useState<any[]>([]);

  const { params, first, setRows, setPage } = fetchUtil();
  const { page, rows, sort } = params;

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      const wargaService = new WargaService();

      setLoading(true);

      const { data } = await wargaService.get(controller, { page, rows, sort });
      setWarga(data);

      setLoading(false);
    };

    getData();

    return () => {
      controller.abort();
    };
  }, [page, rows, sort]);

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
          value={warga?.data ?? []}
          loading={loading}
          dataKey="id"
          lazy
          selectionMode="multiple"
          rootSelectionMode="checkbox"
          selection={selection}
          onSelectionChange={(e) => setSelection(e.value)}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data as any[])}
          action={actionTemplate}
          rowExpansionTemplate={(e) => rowExpansionTemplate(e)}
          rows={params.rows}
          onRowsChange={(e) => setRows(e.value)}
          totalRecords={warga?.meta.total ?? 0}
          page={params.page}
          onPage={setPage}
          first={first}
        >
          <Column
            header="NIK"
            field="nik"
          />
          <Column
            header="Nama Lengkap"
            field="nama"
          />
          <Column
            header="Alamat KTP"
            field="alamat_ktp"
          />
          <Column
            header="RT"
            field="rt"
            className="text-center"
          />
          <Column
            header="BLOK"
            field="blok"
            className="text-center"
          />
          <Column
            header="Nomor"
            field="nomor"
            className="text-center"
          />
          <Column
            header="Status Kawin"
            field="status_kawin"
            className="text-center"
          />
          <Column
            header="Aksi"
            body={columnAksiBodyTemplate}
          />
        </TableCollection>
      </div>
    </AdminPage>
  );
}

export default KelolaData;
