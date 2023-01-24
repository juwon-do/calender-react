import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

export function Content() {
  const [value, onChange] = useState(new Date());

  
  return (
    <div>
      <h1>Welcome to React!</h1>
      <Calendar onChange={onChange} value={value}/>
      
    </div>
  )
}