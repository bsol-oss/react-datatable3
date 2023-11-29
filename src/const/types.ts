import { ColumnDef, RowData } from '@tanstack/react-table';

export interface Option {
  key: string;
  value: [{ value: string; label: string }];
}

export interface DataInterface {
  id: number;
  name: string;
  hub_id: number;
  description: string | null;
  is_active: number;
  bu_id: string;
  actions: string;
  dropOptions: Option[] | null;
}

export interface SubareaInterface {
  count: number;
  filterCount: number;
  results: DataInterface[];
  ok: boolean;
  status: number;
  message: string;
  dropOptions: Option[] | null;
}

export interface FilterInterface {
  offset: number;
  rows: number;
  field: string;
  sort: string;
  searchTerm: string;
  individualSearchTerm: Record<string, string>;
}

export interface RowInterface {
  original: {
    id: number;
    name: string;
    is_active: number;
    description: string | null;
    hub_id: number;
    bu_id: string | null;
  };
}

export type ColumnType<TData extends RowData, TValue = unknown> = ColumnDef<
  TData,
  TValue
> & {
  Filter?: unknown;
};
