import api from "../endpoints/api";

export default class WargaService {
  static async fetchWarga(payload) {
    const { data } = await api.get("/warga", {
      params: payload,
    });

    return data;
  }
}
