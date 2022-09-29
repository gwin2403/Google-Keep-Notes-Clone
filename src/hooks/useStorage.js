import { useEffect, useState } from "react";
import { v4 } from "uuid";
function useStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue != null) return JSON.parse(localValue);
    return defaultValue;
  });
  useEffect(() => {
    console.log("value changed");
  }, [value]);
  const addValue = (data) => {
    setValue((prev) => [...prev, { id: v4(), val: data }]);
    console.log(value);
  };
  const updateValue = (id, data) => {
    setValue((prev) => {
      prev[id] = data;
      return prev;
    });
  };
  const deleteValue = (id) => {
    setValue((prev) => {
      delete prev[id];
      return prev;
    });
  };
  useEffect(() => {
    console.log("value3", value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue, addValue, updateValue, deleteValue];
}
export default useStorage;
