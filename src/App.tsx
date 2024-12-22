import { useState } from 'react'

import './App.css'
import { SalesTable } from './components/SalesTable/SalesTable'
import { Chart } from './components/Chart/Chart';
import { AppContext } from './context/AppContext';

function App() {
  const [showChart, setShowChart] = useState(false);
  const [company, setCompany] = useState('');

  const context = {
    company,
    setCompany: (value: string) => setCompany(value),
    setShowChart: (value: boolean) => setShowChart(value),
  }
  
  return (
    <AppContext.Provider value={context}>
      <div className='app'>
        <SalesTable />
        {showChart && <Chart />}
      </div>
    </AppContext.Provider>
  )
}

export default App
