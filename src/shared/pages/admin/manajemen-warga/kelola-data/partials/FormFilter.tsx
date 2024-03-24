import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { FormFilterInterface } from '../interface';
import { Icon } from '@iconify/react';
import { InputText } from 'primereact/inputtext';

type PropsType = {
  formFilter: FormFilterInterface;
  setFormFilter: Dispatch<SetStateAction<FormFilterInterface>>;
};

function FormFilter({ formFilter, setFormFilter }: PropsType) {
  const handleInputChange = (key: keyof FormFilterInterface, event: ChangeEvent<HTMLInputElement> | DropdownChangeEvent) => {
    const value = event.target.value;
    setFormFilter((formFilter) => ({ ...formFilter, [key]: value }));
  };

  return (
    <div className="grid grid-cols-2 grid-rows-6 gap-x-52 gap-y-6">
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">Status Sosial</label>
        <Dropdown
          placeholder="Pilih Status"
          options={[]}
          value={formFilter.status_sosial}
          onChange={(e) => handleInputChange('status_sosial', e)}
        />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">NIK</label>
        <InputText
          placeholder="Cari berdasarkan NIK"
          value={formFilter.nik}
          onChange={(e) => handleInputChange('nik', e)}
        />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">Status Kawin</label>
        <Dropdown
          placeholder="Pilih Status"
          options={[]}
          value={formFilter.status_kawin}
          onChange={(e) => handleInputChange('status_kawin', e)}
        />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">Nama</label>
        <InputText
          placeholder="Cari berdasarkan Nama"
          value={formFilter.nama}
          onChange={(e) => handleInputChange('nama', e)}
        />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">Status Pekerjaan</label>
        <Dropdown
          placeholder="Pilih Status"
          options={[]}
          value={formFilter.status_pekerjaan}
          onChange={(e) => handleInputChange('status_pekerjaan', e)}
        />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">Alamat KTP</label>
        <InputText
          placeholder="Cari berdasarkan alamat KTP"
          value={formFilter.alamat_ktp}
          onChange={(e) => handleInputChange('alamat_ktp', e)}
        />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">Status Warga</label>
        <Dropdown
          placeholder="Pilih Status"
          options={[]}
          value={formFilter.status_warga}
          onChange={(e) => handleInputChange('status_warga', e)}
        />
      </div>
      <div className="grid grid-cols-[repeat(3,_auto_minmax(0,_1fr))] items-center gap-x-5 pl-[150px]">
        <label htmlFor="">RT</label>
        <InputText
          value={formFilter.rt}
          onChange={(e) => handleInputChange('rt', e)}
        />
        <label htmlFor="">Blok</label>
        <InputText
          value={formFilter.blok}
          onChange={(e) => handleInputChange('blok', e)}
        />
        <label htmlFor="">Nomor</label>
        <InputText
          value={formFilter.nomor}
          onChange={(e) => handleInputChange('nomor', e)}
        />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">Agama</label>
        <Dropdown
          placeholder="Pilih Agama"
          options={[]}
          value={formFilter.agama}
          onChange={(e) => handleInputChange('agama', e)}
        />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">Pekerjaan</label>
        <InputText
          placeholder="Cari berdasarkan pekerjaan"
          value={formFilter.pekerjaan}
          onChange={(e) => handleInputChange('pekerjaan', e)}
        />
      </div>
      <div className="grid grid-cols-[150px_minmax(0,_1fr)] items-center">
        <label htmlFor="">Grup Umur</label>
        <Dropdown
          placeholder="Pilih Grup Umur"
          options={[]}
          value={formFilter.grup_umur}
          onChange={(e) => handleInputChange('grup_umur', e)}
        />
      </div>
      <div className="flex justify-end gap-5">
        <Button
          label="Reset"
          size="small"
          pt={{
            root: {
              className: 'bg-[#DCDCDC] border-[#DCDCDC] text-[#5B5B5B] px-10 font-normal'
            }
          }}
        />
        <Button
          label="Cari"
          size="small"
          icon={
            <Icon
              icon="tabler:search"
              className="mr-3 h-5 w-5"
            />
          }
          pt={{
            root: {
              className: 'bg-[#626262] border-[#626262] text-[#FFFFFF] px-10 font-normal'
            }
          }}
        />
      </div>
    </div>
  );
}

export default FormFilter;
