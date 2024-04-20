import { DataTableStateEvent } from 'primereact/datatable';
import { useState } from 'react';

export default function () {
  const [page, setPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(5);
  const [sort, setSort] = useState<string>('');
  const [first, setFirst] = useState<number>(0);

  const params = {
    page,
    rows,
    sort
  };

  const setPageEvent = (event: DataTableStateEvent) => {
    setPage(event.page ? event.page + 1 : 1);
    setFirst(event.first ?? 0);
  };

  return { params, first, setRows, setSort, setPage: setPageEvent };
}
