import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import WargaService from "../../services/warga.service";
import "../../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";

const allowedSort = [
    "nama",
    "jenis_kelamin",
    "tgl_lahir",
    "alamat_ktp",
    "blok",
    "nomor",
    "rt",
    "agama",
    "pekerjaan",
    "no_telp",
    "status_warga",
    "status_kawin",
    "status_sosial",
    "catatan",
    "kk_pj",
];

const columns = [
    { selector: (row) => row.no_kk, name: "No. KK", sortable: true },
    { selector: (row) => row.nik, name: "NIK", sortable: true },
    { selector: (row) => row.nama, name: "Nama Lengkap", sortable: true },
    {
        selector: (row) => row.jenis_kelamin,
        name: "Jenis Kelamin",
        sortable: true,
    },
    { selector: (row) => row.tgl_lahir, name: "Tanggal Lahir", sortable: true },
    { selector: (row) => row.alamat_ktp, name: "Alamat KTP", sortable: true },
    { selector: (row) => row.blok, name: "Blok", sortable: true },
    { selector: (row) => row.nomor, name: "Nomor", sortable: true },
    { selector: (row) => row.rt, name: "RT", sortable: true },
    { selector: (row) => row.agama, name: "Agama", sortable: true },
    { selector: (row) => row.pekerjaan, name: "Pekerjaan", sortable: true },
    { selector: (row) => row.no_telp, name: "No. Telepon", sortable: true },
    {
        selector: (row) => row.status_warga,
        name: "Status Warga",
        sortable: true,
    },
    {
        selector: (row) => row.status_kawin,
        name: "Status Kawin",
        sortable: true,
    },
    {
        selector: (row) => row.status_sosial,
        name: "Status Sosial",
        sortable: true,
    },
    { selector: (row) => row.catatan, name: "Catatan", sortable: true },
    { selector: (row) => row.kk_pj, name: "KK PJ", sortable: true },
];

export default function Index() {
    const [warga, setWarga] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await WargaService.fetchWarga({});
                console.log(data.data);
                setWarga(data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const customSort = async (rows, field, direction) => {
        const allowed = allowedSort.includes(field);
        if (allowed) {
            if (field === "tgl_lahir") {
                try {
                    const sortedData =
                        await WargaService.sortDataByTanggalLahir(direction);
                    return sortedData;
                } catch (error) {
                    console.error("Failed to fetch sorted data:", error);
                    return rows; // Return unsorted data in case of error
                }
            } else {
                return rows.sort((a, b) => {
                    if (direction === "asc") {
                        return a[field] > b[field] ? 1 : -1;
                    } else if (direction === "desc") {
                        return a[field] < b[field] ? 1 : -1;
                    }
                    return 0;
                });
            }
        } else {
            return rows;
        }
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Warga</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    Warga
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Daftar Warga</h3>
                                </div>
                                <div className="card-body">
                                    <DataTable
                                        title=""
                                        columns={columns}
                                        data={warga}
                                        striped
                                        highlightOnHover
                                        pagination
                                        paginationPerPage={10}
                                        progressPending={loading}
                                        sortFunction={(
                                            rows,
                                            field,
                                            direction
                                        ) => customSort(rows, field, direction)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
