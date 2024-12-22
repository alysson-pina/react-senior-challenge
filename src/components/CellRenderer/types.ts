import { DataRow } from "../../types/data";

export type CellProps = {
  data: DataRow;
  type: 'growth' | 'qtdEst' | 'qtdVsVa'
}
