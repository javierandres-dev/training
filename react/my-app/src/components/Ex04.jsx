import './Ex04.css'
import React, {useEffect, useState} from 'react'

export const Ex04 = () => {
  const [display, setDisplay] = useState('0')
  const [number, setNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [result, setResult] = useState(null);

  useEffect(() => {
    switch (operator) {
      case '/':
        console.log('is / ...')
        break;
      case 'x':
        console.log('is x ...')
        break;
      case '-':
        console.log('is - ...')
        break;
      case '=':
        console.log('is = ...')
        break;
      case '+':
        console.log('is + ...')
        break;
      default:
        break;
    }
  }, [operator])

  useEffect(() => {
if (display === '0') {
  const temp = '' + number
    console.log('temp:', temp)
}
  }, [number])

  useEffect(() => {
    console.log('temp:')
  })


  const Button = ({value}) =>{
  return <button className='c-btn' onClick={()=>handleClick(value)}>
    {value}
  </button>
}

  const handleClick=(v)=>{
    console.log(v)
    if (v === '.') {
      console.log('is a dot')
    } else if (v === '/' || v === 'x' || v === '-' || v === '=' || v === '+') {
      setOperator(v)
    } else {
      console.log('is a number...')
setNumber(v)
    }
  }

  return (
    <div>
      <h2>Calculator</h2>
      <div className='calculator'>
        <div className='c-display'>{display}</div>
        <div className='c-btns'>
          <Button value={7} />
          <Button value={8} />
          <Button value={9} />
          <Button value={'/'} />
          <Button value={4} />
          <Button value={5} />
          <Button value={6} />
          <Button value={'x'} />
          <Button value={1} />
          <Button value={2} />
          <Button value={3} />
          <Button value={'-'} />
          <Button value={0} />
          <Button value={'.'} />
          <Button value={'='} />
          <Button value={'+'} />
        </div>
      </div>
    </div>
  )
}
