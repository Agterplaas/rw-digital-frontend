import api from '@/endpoints/api';
import FetchInterface from '@/interfaces/fetch';
import { WargaInterface } from '@/shared/pages/admin/manajemen-warga/kelola-data/interface';
import { AxiosError } from 'axios';

export default class WargaService {
  async get(controller: AbortController, params?: object) {
    let data: FetchInterface<WargaInterface[]> | null = null;
    let error: AxiosError | null = null;

    try {
      const response = await api.get<FetchInterface<WargaInterface[]>>('/warga', { params, signal: controller.signal });
      data = response.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        error = err;
      }
    }

    return { data, error };
  }
}
