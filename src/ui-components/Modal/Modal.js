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
          {days &&
            days.map((day, index) => (
              <div key={index} className="modal-content">
                <h2>
                  <b>Full Day</b>
                </h2>
                <b>
                  <div className="dayId">
                    <p>Day:</p>
                    {day.id}
                  </div>
                </b>
                <div className="dayPractice">
                  <p>Practice: </p>
                  {day.Practice}
                </div>
                <div className="dayIndo">
                  <p>Individual Work: </p>
                  {day.Indo}
                </div>
                <div className="dayLift">
                  <p>Lift: </p>
                  {day.Lift}
                </div>
                <div className="dayWallball">
                  <p>Wallball: </p>
                  {day.WallBall}
                </div>
                <div className="dayPT">
                  <p>PT: </p>
                  {day.PT}
                </div>
                <div className="dayGameday">
                  <p>Gameday: </p>
                  {day.Game}
                </div>
                <div className="dayNap">
                  <p>Nap: </p>
                  {day.Nap}
                </div>
                <div className="dayHomework">
                  <p>Homework: </p>
                  {day.Homework}
                </div>
                <div className="dayVideoGame">
                  <p>Videogames: </p>
                  {day.VideoGames}
                </div>
                <div className="dayJessCall">
                  <p>Call or hangout with Jess: </p>
                  {day.JessCall}
                </div>
                <div className="dayHangout">
                  <p>Hangout with friends: </p>
                  {day.Hangout}
                </div>
                <div className="dayParents">
                  <p>Call or hangout with parents: </p>
                  {day.Parents}
                </div>
                <div className="dayClasses">
                  <p>Classes: </p>
                  {day.Classes}
                </div>
                <div className="dayPrayed">
                  <p>Prayed: </p>
                  {day.Prayed}
                </div>
                <div className="dayBibleTime">
                  <p>Read the Bible: </p>
                  {day.BibleTime}
                </div>
                <div className="dayBibleStudy">
                  <p>Have Biblestudy: </p>
                  {day.BibleStudy}
                </div>
                <div className="daySatisfied">
                  <p>Satisfied with the day: </p>
                  {day.Satisfied}
                </div>
                <div className="dayStressed">
                  <p>Stressed out: </p>
                  {day.Stressed}
                </div>
                <div className="dayGoodEvent">
                  <p>Good Event: </p>
                  {day.GoodEvent}
                </div>
                <div className="dayBadEvent">
                  <p>Bad Event: </p>
                  {day.BadEvent}
                </div>
                <div className="dayMeals">
                  <p>Amount of meals: </p>
                  {day.Meals}
                </div>
                <div className="dayStressedOut">
                  <p>Stressed out level: </p>
                  {day.StressedOut}
                </div>
                <div className="dayHealthy">
                  <p>How healthy: </p>
                  {day.Healthy}
                </div>
                <div className="daySleep">
                  <p>How much sleep: </p>
                  {day.Sleep}
                </div>
                <div className="dayHappy">
                  <p>How happy: </p>
                  {day.Happy}
                </div>
                <div className="dayDescription">
                  <p>The Description of the day: </p>
                  {day.Description}
                </div>
                
              </div>
            ))}
            <button className="close-modal" onClick={toggleModal}>
                  Close
                </button></div>
          
        </div>
      )}
    </>
  );
};
export default Modal;
