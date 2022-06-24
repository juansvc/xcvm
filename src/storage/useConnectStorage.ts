import { useEffect,useState } from 'react';

export function useConnectStorage(defaultValue:any, key: any) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyConnect = window.sessionStorage.getItem(key);

    if (stickyConnect !== null) {
      setValue(JSON.parse(stickyConnect));
    }
  }, [key]);

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}