export interface DataCell {
  main: number;
  mainUnit: '%' | 'pp';
  sub: number;
  period: string;
}

export interface company {
  name: string;
  area: string;
}

export interface DataRow {
  company: company;
  updatedAt: string;
  growth: DataCell | undefined;
  qtdEst: DataCell | undefined;
  qtdVsVa: DataCell | undefined;
}
