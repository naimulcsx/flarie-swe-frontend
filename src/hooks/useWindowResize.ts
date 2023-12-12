import { useEffect, useState } from 'react';

type DimensionsTuple = [number, number];

function getCurrentWidthAndHeight(): DimensionsTuple {
  return [window.innerWidth, window.innerHeight];
}

export function useWindowResize() {
  const [widthAndHeight, setWidthAndHeight] = useState(getCurrentWidthAndHeight());

  function handler() {
    setWidthAndHeight(getCurrentWidthAndHeight());
  }

  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });

  return widthAndHeight;
}
