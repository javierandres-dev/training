import React from 'react'

export const ConditionalComponet = () => {
  /* let output = null;
  if (false) {
    output = <p>...true...</p>
  } else {
    output = <p>...false...</p>
  }
  return (
    <div>{output}</div>
  ) */
  return false ? <p>...true...</p> : <p>...false...</p>
}
