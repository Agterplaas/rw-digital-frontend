export interface EntityInterface<F = {}, D = {}> {
  page: {
    endpoint: string;
    identifier: string;
    primaryKey: string;
    title: string;
  };
  filter: F;
  form: D;
}
