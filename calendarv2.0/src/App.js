import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/format';
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

const locales = {
  "en-US": require("date-fns/locale/en-US"),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek:() => {
    return startOfWeek(new Date(), {weekStartsOn: 1});
  },    
  getDay,
  locales,
})

//Months are zero-indexed (January=0, February=1 etc.
//Add pre-determined events here (individual events or long tasks with duration for more than one day)

const events = [
  {
    title: "Birthday",
    start: new Date (2023,11,1),
    end: new Date (2023,11,1)
},

{
    title: "Christmas Vacation",
    start: new Date (2023,11,22),
    end: new Date (2024,0,2)
 }
]

function App() {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent(){
    setAllEvents([...allEvents, newEvent]);
  }

  const handleRemoveEvent = (event) => {
    setAllEvents(allEvents.filter(e => e.id === event.id));
   };

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
       <input type='text' placeholder='Add Title For Event' style={{maxWidth:"50", margin:"10px"}}
       value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
       />

       <DatePicker placeholderText='Start Date' style={{maxWidth: "50", margin: "10px"}}
       selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}/>

       <DatePicker placeholderText='End Date' style={{maxWidth: "50", margin: "10px"}}
       selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}/>

      <button style = {{margin: "10px"}} onClick={handleAddEvent}>Add Event</button>
      </div>

      <Calendar localizer={localizer} events={allEvents} 
      startAccessor="start" endAccessor="end" style={{height: 650, width: '90%', margin: "0 auto", padding: 10}} 
      onSelectEvent={handleRemoveEvent}
      />
    </div>
  );
}

export default App;