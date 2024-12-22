import { type FunctionComponent } from "react";
import { CellRenderer } from "./CellRenderer";

import { CellProps } from "./types";

export const CellRendererWrapper: FunctionComponent<CellProps> = ({
  data,
  type
}: CellProps) => {
  const { main, mainUnit, period, sub } = data[type] || {}

  return (
    <CellRenderer main={main} mainUnit={mainUnit} period={period} sub={sub} />
  );
};

