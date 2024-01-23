import React ,{ Dispatch,SetStateAction }from "react";
import { FilterObj } from "../components/filters/filters"

interface Props{
    filter: FilterObj;
    setFilter:Dispatch<SetStateAction<FilterObj>>
}

const AppContext = React.createContext<Props>({} as Props)

export default AppContext