import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formList, setFormList] = useState([]);

  return (
    <DataContext.Provider value={{ formList, setFormList }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
