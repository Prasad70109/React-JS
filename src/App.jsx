import { useState } from 'react'
import Item from './components/Item'
import ItemDate from './components/ItemDate'


function App() {
  const [count, setCount] = useState(0)

  const res = [{
    name : "Nirma",
    day   : "20" ,
    month : "June" ,
    year : "1996"
  } , {
    name : "Surf excel",
    day   : "10" ,
    month : "April" ,
    year : "2000"
  } ,{
    name : "Wheel",
    day   : "11" ,
    month : "Jan" ,
    year : "1997"
  }]

  return (
    <div>
      <Item name={res[0].name}>Sorry guys</Item>
      <ItemDate day={res[0].day} month={res[0].month} year={res[0].year}></ItemDate>
      <Item name={res[1].name}></Item>
      <ItemDate day={res[1].day} month={res[1].month} year={res[1].year}></ItemDate>
      <Item name={res[2].name}></Item>
      <ItemDate day={res[2].day} month={res[2].month} year={res[2].year}></ItemDate>
     <h1>Hello Prasad Devolper</h1>
    </div>
  )
}

export default App
