import React, { useState } from 'react';
import data from './data';
function App() {
  const [value,setValue] = useState(0);
  const [text,setText] = useState([]);
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(value>0)
      setText(data.slice(0,value));
    else 
    setText(data.slice(0,1));
  }
  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor='amount'>paragraphs:</label>
      <input
        type='number'
        id='amount'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
      <button className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
     {
      text.map((text,index)=>{
          return <p key={index}>{text}</p>
      })
     }
    </article>
    </section>
    )
}

export default App;
