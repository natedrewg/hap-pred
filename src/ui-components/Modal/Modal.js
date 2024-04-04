import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ days }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Full Day
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
              <div className="modal-content">
                <h2>
                  <b>Full Day</b>
                </h2>
                <b>
                  <div className="dayId">
                    <p>Day: {days.id}</p>
                    
                  </div>
                </b>
                <div className="dayPractice">
                  <p>Practice: {days.Practice ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayIndo">
                  <p>Individual Work: {days.Indo ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayLift">
                  <p>Lift: {days.Lift ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayWallball">
                  <p>Wallball: {days.WallBall ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayPT">
                  <p>PT: {days.PT ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayGameday">
                  <p>Gameday: {days.Game ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayNap">
                  <p>Nap: {days.Nap ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayHomework">
                  <p>Homework: {days.Homework ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayVideoGame">
                  <p>Videogames: {days.VideoGames ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayJessCall">
                  <p>Call or hangout with Jess: {days.JessCall ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayHangout">
                  <p>Hangout with friends: {days.Hangout ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayParents">
                  <p>Call or hangout with parents: {days.Parents ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayClasses">
                  <p>Classes: {days.Classes ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayPrayed">
                  <p>Prayed: {days.Prayed ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayBibleTime">
                  <p>Read the Bible: {days.BibleTime ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayBibleStudy">
                  <p>Have Biblestudy: {days.BibleStudy ? "Yes" : "No"}</p>
                  
                </div>
                <div className="daySatisfied">
                  <p>Satisfied with the day: {days.Satisfied ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayStressed">
                  <p>Stressed out: {days.Stressed ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayGoodEvent">
                  <p>Good Event: {days.GoodEvent ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayBadEvent">
                  <p>Bad Event: {days.BadEvent ? "Yes" : "No"}</p>
                  
                </div>
                <div className="dayMeals">
                  <p>Amount of meals: {days.Meals}</p>
                  
                </div>
                <div className="dayStressedOut">
                  <p>Stressed out level: {days.StressedOut}</p>
                  
                </div>
                <div className="dayHealthy">
                  <p>How healthy: {days.Healthy}</p>
                  
                </div>
                <div className="daySleep">
                  <p>How much sleep: {days.Sleep}</p>
                  
                </div>
                <div className="dayHappy">
                  <p>How happy: {days.Happy}</p>
                  
                </div>
                <div className="dayDescription">
                  <p>The Description of the day: </p>
                  {days.Description}
                </div>
                <button className="close-modal" onClick={toggleModal}>
                  Close
                </button></div>
              </div>
            ))
            
          
        </div>
      )}
    </>
  );
};
export default Modal;
