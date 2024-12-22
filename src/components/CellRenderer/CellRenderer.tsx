import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

import { DataCell } from "../../types/data";

import './Cell.css';
import { useIsLargeScreen } from "../../hooks/useIsLargeScreen";

type CoreProps = Partial<{
  main: DataCell['main'];
  mainUnit: DataCell['mainUnit'];
  sub: DataCell['sub'];
  period: DataCell['period'];
}>

function getMainValueColor(value: number, unit: DataCell['mainUnit'] | undefined) {
  if (value === 0 || !value) {
    return 'black';
  }

  if (unit === 'pp') {
    return value > 0 ? 'green' : 'red';
  }

  return 'black';
}

function getSubValueColor(value: number) {
  if (value === 0) {
    return 'black';
  }

  return value > 0 ? 'green' : 'red';
}

function ArrowIndicator({value}: {value: number}) {
  if(value > 0) {
    return <FaArrowUp className='arrow' />;
  }

  if (value < 0) {
    return <FaArrowDown className='arrow' />;
  }

  return null;
}

export const CellRenderer = ({
  main, mainUnit, period, sub
}: CoreProps) => {
  const isLarge = useIsLargeScreen();

  const mainValue = main?.toLocaleString("en", { minimumFractionDigits: 1 });
  const subValue = sub?.toLocaleString("en", { minimumFractionDigits: 1 });

  return (
    <div className="cellContainer">
      <div className="cellUpperPart">
        <div className={`main ${main && getMainValueColor(main, mainUnit)}`}>
          {main ? `${mainValue}%` : '--'}
        </div>

        {period && isLarge && <span className="cellInfo">{period}</span>}
      </div>
      {
        sub !== undefined ? (
          <div className="sub">
            <span className={`${getSubValueColor(sub)}`}><span><ArrowIndicator value={sub} /></span>{subValue}pp</span>
            {isLarge && <span>WoW</span>}
          </div>
        ) : '-'
      }
    </div>
  );
};
