import React, { useState, useEffect } from 'react';

export const CallbackHookChild = ({ getDouble }) => {
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(getDouble());
    console.log('CallbackHookChild rendered');
  }, [getDouble]);

  return (
    <>
      <div>CallbackHookChild</div>
      <p>Double: {double}</p>
    </>
  );
};
