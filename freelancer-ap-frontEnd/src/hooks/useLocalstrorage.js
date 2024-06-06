import { useEffect, useState } from "react";

export default function useLOcalStorage(key,initialState){
      const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key) || null;
        return storedValue ? JSON.parse(storedValue) : initialState;
      });
       
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [value,key]);
      return[value,setValue];
}