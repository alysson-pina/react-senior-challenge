import { useContext, type FunctionComponent } from "react";
import { LuPlusCircle } from "react-icons/lu";

import { AppContext } from "../../context/AppContext";
import { DataRow } from "../../types/data";

import './Company.css';

type CompanyProps = {
  data: DataRow;
}

export const CompanyRenderer: FunctionComponent<CompanyProps> = ({
  data
}: CompanyProps) => {
  const { setShowChart, setCompany } = useContext(AppContext);

  const handleClick = () => {
    setShowChart(true);
    setCompany(data.company.name);
  };

  return (
    <div className="companyWrapper">
      <LuPlusCircle className="companyDetailsIcon" onClick={handleClick} />
      <div className="company">
        <span className="companyName">{data.company.name}</span>
        <span className="companyArea">{data.company.area}</span>
      </div>
    </div>
  );
};
