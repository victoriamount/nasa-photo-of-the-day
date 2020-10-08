import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import dummyData from './dummyData';
import PhotoText from './components/PhotoText';

function App() {
  const [date, setDate] = useState('2020-08-01')
  const [objWithPic, setOjbWithPic] = useState(dummyData)
  const [photoTitle, setPhotoTitle] = useState(dummyData.title)
  const [photoText, setPhotoText] = useState(dummyData.explanation)
  const apiKey = 'ODx3rLHxUQM1hepDUdGyqQngk9C8LxG70vQ7Nho7'

  console.log('app running')

  useEffect(() => {
    const fetchObjWithPic = () => {
      console.log('inside fetchObjWithPic')
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
        .then(res => {
          setOjbWithPic(res.data)
          setPhotoTitle(res.data.title)
          setPhotoText(res.data.explanation)
          console.log('Inside main axios')
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
    return newRandomDate;
  }


  const PhotoSection = () => (
    <div className='photoSection'>
      {objWithPic && <img src={objWithPic.url} alt='NASAs Daily Photo' />}
      <div className='photoText'>
        <PhotoText objWithPic={objWithPic} date={date} photoTitle={photoTitle} photoText={photoText} />
        <button onClick={()=>changeDate(runRandomDate())}>{`Showing ${date} 🚀 Click to Refresh`}</button>  
      </div>

    </div>
  )

  return (
    <div className="App">
      <PhotoSection />
      <p>
        A Victoria Mount Production<span role="img" aria-label='go!'>🚀</span>!
        
      </p>
    </div>
  );
}

export default App;
