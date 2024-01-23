import useAppContext from "../../hooks/useAppContext";
import GenreFilter from "./genreFilter";
import MonthFilter from "./monthFilter";
import { FaFilter } from "react-icons/fa";

export type FilterObj = {
  [prop: string]: string;
};

export interface FilterProps {
  updateFilter: (filter: FilterObj) => void;
}

export default function Filters() {
  const { filter, setFilter } = useAppContext();
  const updateFilter = (filterObj: FilterObj) => {
    const clone = { ...filter };

    for (let prop in filterObj) clone[prop] = filterObj[prop];
    setFilter(clone);
  };

  return (
    <div className="filters">
      <FaFilter color="orangered" />
      <GenreFilter updateFilter={updateFilter} />
      <MonthFilter updateFilter={updateFilter} />
    </div>
  );
}
