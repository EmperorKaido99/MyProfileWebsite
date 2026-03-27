'use client';

import { useEffect, useState } from 'react';

export function useWebGLDetect(): boolean {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const context =
        canvas.getContext('webgl2') ||
        canvas.getContext('experimental-webgl');
      setSupported(!!context);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}
