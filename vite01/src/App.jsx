import React from 'react';
import Chai from './chai';
import { useState } from 'react';
import Card from './components/card';

export default function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black'>Tailwind test</h1>
      <Card channel="chai aur code"  />
    </>
  )
}
