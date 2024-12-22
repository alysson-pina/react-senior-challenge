import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  ValueFormatterFunc
} from "@ag-grid-community/core";

import { CellRendererWrapper } from "../CellRenderer/CellRendererWrapper";
import { CompanyRenderer } from "../CellRenderer/CompanyRenderer";
import { IconRenderer } from "../CellRenderer/IconRenderer";
import { salesData } from "./data";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import './SalesTable.css';
import { isLargeScreen } from '../../utils/screen';

const SalesTable = () => { 
  const gridRef = useRef<GridApi | null>(null);

  const lastUpdateFormatter: ValueFormatterFunc = useCallback(({ value }) => { 
    return isLargeScreen() ? `Updated ${ value }` : `${value}`;
  }, []);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, _setColDefs] = useState<ColDef[]>([
      { field: 'company', headerName: 'Metric', sort: 'asc', cellRenderer: CompanyRenderer, cellClass: 'alignLeft', wrapText: true, minWidth: 80 },
      { field: 'updatedAt', headerName: 'Last Update', valueFormatter: lastUpdateFormatter, cellClass: 'updatedAt', wrapText: true, minWidth: 80 },
      { field: 'growth', headerName: 'Trailing Growth Est.', cellRenderer: CellRendererWrapper, cellRendererParams: { type: 'growth' }},
      { field: 'qtdEst', headerName: 'QTD Est.', cellRenderer: CellRendererWrapper, cellRendererParams: { type: 'qtdEst' } },
      { field: 'qtdVsVa', headerName: 'QTD vs VA Cons.', cellRenderer: CellRendererWrapper, cellRendererParams: { type: 'qtdVsVa' }  },
      { field: 'icon', headerName: '', cellStyle: { border: 'none' }, cellRenderer: IconRenderer, flex: 0.5, sortable: false  }
  ]);

  const defaultColDef: ColDef = useMemo(
    () => ({
      resizable: false,
      wrapText: true,
      sortable: true,
      autoHeight: true,
      wrapHeaderText: true,
      cellClass: 'cell',
      headerClass: 'header',
      flex: 1,
    }),
    []
  );

  const updateColumnVisibility = useCallback(() => {
    gridRef.current?.refreshCells({
      columns: ['updatedAt']
    });

    if (isLargeScreen()) {
      gridRef.current?.setColumnsVisible(['icon'], true);

      return;
    }

    gridRef.current?.setColumnsVisible(['icon'], false);
  }, [])

  const onGridReady = useCallback((params: GridReadyEvent) => {
    gridRef.current = params.api;

    params.api.sizeColumnsToFit();
    updateColumnVisibility();
  }, []);

  useEffect(() => {
    const handleScreenResize = () => {
      if (gridRef.current) {
        gridRef.current.sizeColumnsToFit();
        updateColumnVisibility();
      }
    };

    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);


  return (
    <div className="ag-theme-quartz grid">
      <AgGridReact 
        ref={gridRef}
        rowData={salesData}
        rowClass='row'
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
      />
    </div>
  );
}

export {
  SalesTable
};
