import { Fragment, useState } from "react"

let nextId=0
export default function Add(){
    const [data, setData] = useState('');
    const [printArr] = useState([]);
  
    return (
      <Fragment>
        <h1>UI (1)</h1>
        <input
          value={data}
          onChange={element => setData(element.target.value)}
        />
        <button onClick={() => {
          setData('');
          printArr.push({
            id: nextId++,
            name: data,
          });
        }}>Add</button>
        <ul >
          {printArr.map(element => (
            <li  key={element.id}>{element.name}</li>
          ))}
        </ul>
      </Fragment>
    )
}