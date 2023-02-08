import React from 'react';
import { createPortal } from 'react-dom';

export const Portals = () => {
  return createPortal(
    <div>I'm Portals component.</div>,
    document.getElementById('portal')
  );
};
