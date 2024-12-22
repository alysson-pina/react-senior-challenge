import { useContext, type FunctionComponent } from "react";
import { FaRegFileAlt } from "react-icons/fa";

import { CellProps } from "./types";
import { AppContext } from "../../context/AppContext";

import './Icon.css';

export const IconRenderer: FunctionComponent<Pick<CellProps, 'data'>> = ({
  data
}) => {
  const { setShowChart, setCompany } = useContext(AppContext);

  const handleClick = () => {
    setShowChart(true);
    setCompany(data.company.name);
  };

  return (
    <FaRegFileAlt className="detailsIcon" onClick={handleClick} />
  );
};
