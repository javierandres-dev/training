/*
  Only call Hooks at the top level
  Only call Hoosk from React Functions: Components and Custom Hooks
*/
import React from 'react'
import { useFetch } from "../hooks/useFetch"

export const CustomHook = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log(data)
  return (
    <div>CustomHook</div>
  )
}
