import './Chart.css';

import { useContext, useMemo, useRef } from 'react';
import Plotly from "plotly.js-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";
import { AppContext } from '../../context/AppContext';
import { useClickOutside } from '../../hooks/useClickOutside';
import { dataMock } from './data';

const Plot = createPlotlyComponent(Plotly);

type ReturnType = {
  x: Array<string>;
  y: Array<number>;
}

const getCompanySalesData = (company: string): ReturnType => {
  const companyIndex = dataMock['Product'].indexOf(company);

  if (companyIndex === -1) {
    return {
      x: ['Q1', 'Q2', 'Q3', 'Q4'],
      y: [0, 0, 0, 0]
    };
  }

  return {
    x: dataMock["Quarter"].slice(companyIndex, companyIndex + 4),
    y: dataMock["Sales"].slice(companyIndex, companyIndex + 4),
  };
}

const Chart = () => {
  const { company, setShowChart } = useContext(AppContext);
  const ref = useRef(null);
  const handleClickOutside = () => {
    setShowChart(false);
  }

  useClickOutside(ref, handleClickOutside);

  const salesData = useMemo(() => getCompanySalesData(company), [company]);

  const handleDownload = () => {
    const csvData = [
      ['X', 'Y'],
      ...salesData.x.map((x, index) => [x, salesData.y[index]]), // Map from x,y to CSV format
    ];

    const csvContent = csvData.map((row) => row.join(',')).join('\n');

    // Create a Blob from the CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });

    // Create a link element
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'plotly-data.csv');

    // Append the link to the body and simulate click
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className='modalWrapper'>
      <div ref={ref} className='modalMain'>
        <Plot
          data={[
            {
              x: salesData.x,
              y: salesData.y,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
          ]}
          layout={{ width: 640, height: 740, title: `Sales Performance for ${company}` }}
          />
        <button className='button' onClick={handleDownload}>Download as CSV</button>
      </div>
    </div>
  );
}

export {
  Chart
};
