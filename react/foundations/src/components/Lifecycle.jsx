import React, { useEffect }  from 'react'

export const Lifecycle = () => {

  useEffect(() => {
    console.log('Mounting phase');
  }, [])

  useEffect(() => {
    console.log('Updating phase');
  })

  useEffect(() => {
    return () => {
      console.log('Unmounting phase');
    }
  })
  
  return (
    <div>Lifecycle</div>
  )
}
