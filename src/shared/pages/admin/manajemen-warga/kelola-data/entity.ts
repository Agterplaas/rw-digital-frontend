import { EntityInterface } from '@/interfaces/entity';
import { FormFilterInterface } from './interface';

export default (): EntityInterface<FormFilterInterface> => {
  return {
    page: {
      endpoint: 'kelola-data',
      identifier: 'kelola-data',
      primaryKey: 'id',
      title: 'Kelola Data'
    },
    filter: {
      status_sosial: '',
      nik: '',
      status_kawin: '',
      nama: '',
      status_pekerjaan: '',
      alamat_ktp: '',
      status_warga: '',
      rt: '',
      blok: '',
      nomor: '',
      agama: '',
      pekerjaan: '',
      grup_umur: ''
    },
    form: {}
  };
};
