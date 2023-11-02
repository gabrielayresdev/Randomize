import React from "react";

function useLocalStorage<T>(
  key: string,
  inicial: T,
  conversor: (element: string) => T,
  toString: (element: T) => string
) {
  const [state, setState] = React.useState<T>(() => {
    const local = window.localStorage.getItem(key);
    return local ? conversor(local) : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, toString(state));
  }, [key, state, toString]);

  return { state, setState };
}

export default useLocalStorage;
