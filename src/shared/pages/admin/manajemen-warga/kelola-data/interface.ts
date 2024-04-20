export interface FormFilterInterface {
  status_sosial: string;
  nik: string;
  status_kawin: string;
  nama: string;
  status_pekerjaan: string;
  alamat_ktp: string;
  status_warga: string;
  rt: string;
  blok: string;
  nomor: string;
  agama: string;
  pekerjaan: string;
  grup_umur: string;
}

export interface WargaInterface {
  id: number;
  no_kk: number;
  nik: number;
  nama: string;
  jenis_kelamin: string;
  tgl_lahir: string;
  usia: number;
  alamat_ktp: string;
  blok: string;
  nomor: number;
  rt: string;
  agama: string;
  no_telp: string;
  status_pekerjaan: string;
  pekerjaan: string;
  status_warga: string;
  status_kawin: string;
  status_sosial: string;
  catatan: string;
  kk_pj: string;
}
