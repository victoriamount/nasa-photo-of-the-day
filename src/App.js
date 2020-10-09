import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import dummyData from './dummyData';
import PhotoText from './components/PhotoText';
import PhotoSection from './components/PhotoSection'
import styled from 'styled-components'

function App() {
  const [date, setDate] = useState('2020-08-01')
  const [objWithPic, setOjbWithPic] = useState(dummyData)
  const apiKey = 'ODx3rLHxUQM1hepDUdGyqQngk9C8LxG70vQ7Nho7'

  console.log('app running')

  useEffect(() => {
    const fetchObjWithPic = () => {
      console.log('inside fetchObjWithPic')
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
        .then(res => {
          setOjbWithPic(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchObjWithPic()
  }, [date])


  const changeDate = id => {
    setDate(id)
  }


// TO GET A RANDOM DATE: 
  // from: https://stackoverflow.com/questions/39472783/get-random-date-is-yyyy-mm-dd-format-javascript
  function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
  function runRandomDate(){
    let newRandomDate = randomDate(new Date(2010, 0, 1), new Date(2020, 10, 7));
    console.log(newRandomDate)
    return changeDate(newRandomDate);
  }







  return (
    <div className="App">
      <PhotoSection objWithPic={objWithPic} runRandomDate={runRandomDate} date={date} />
      <p>
        A Victoria Mount Secret Production!
        
      </p>
    </div>
  );
}

export default App;
