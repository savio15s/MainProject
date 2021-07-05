import React, { useCallback, useState, useEffect } from "react";

export default function UseArrayHook(initial) {
  const [value, setValue] = useState(initial);

  return {
    value,
    setValue,
    add: useCallback((a) => setValue((v) => [...v, a])),
    clear: useCallback(() => setValue(() => [])),
    removeIndex: useCallback((index) =>
      setValue((v) => {
        console.log(index);
        return v.filter((x,i)=> i != index);
      })
    )
  };
};
