import './App.css'
import Description from './Description/Description.jsx'
import Feedback from './Feedback/Feedback.jsx'
import Options from './Options/Options.jsx'


import { useState, useEffect } from "react";


const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = window.localStorage.getItem("feedback");
    return storedFeedback ? JSON.parse(storedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  const handleFeedback = (type) => {
    if(type === 'reset') {
      setFeedback({good: 0, neutral: 0, bad: 0});
    } else {
      updateFeedback(type);
    }
  };

  
  
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  

  const updateFeedback = (feedbackType) => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
     

  return (
    <>
      <Description title={'Sip Happens Café'} paragraph={'Please leave your feedback about our service by selecting one of the options below.'}/>
      <Options handleFeedback={handleFeedback} updateFeedback={updateFeedback} totalFeedback={totalFeedback}/>
      <Feedback feedback={feedback} totalFeedback={totalFeedback}/>
      
    </>
  )
}

export default App
