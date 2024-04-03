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
                    <p>Day:</p>
                    {days.id}
                  </div>
                </b>
                <div className="dayPractice">
                  <p>Practice: </p>
                  {days.Practice}
                </div>
                <div className="dayIndo">
                  <p>Individual Work: </p>
                  {days.Indo}
                </div>
                <div className="dayLift">
                  <p>Lift: </p>
                  {days.Lift}
                </div>
                <div className="dayWallball">
                  <p>Wallball: </p>
                  {days.WallBall}
                </div>
                <div className="dayPT">
                  <p>PT: </p>
                  {days.PT}
                </div>
                <div className="dayGameday">
                  <p>Gameday: </p>
                  {days.Game}
                </div>
                <div className="dayNap">
                  <p>Nap: </p>
                  {days.Nap}
                </div>
                <div className="dayHomework">
                  <p>Homework: </p>
                  {days.Homework}
                </div>
                <div className="dayVideoGame">
                  <p>Videogames: </p>
                  {days.VideoGames}
                </div>
                <div className="dayJessCall">
                  <p>Call or hangout with Jess: </p>
                  {days.JessCall}
                </div>
                <div className="dayHangout">
                  <p>Hangout with friends: </p>
                  {days.Hangout}
                </div>
                <div className="dayParents">
                  <p>Call or hangout with parents: </p>
                  {days.Parents}
                </div>
                <div className="dayClasses">
                  <p>Classes: </p>
                  {days.Classes}
                </div>
                <div className="dayPrayed">
                  <p>Prayed: </p>
                  {days.Prayed}
                </div>
                <div className="dayBibleTime">
                  <p>Read the Bible: </p>
                  {days.BibleTime}
                </div>
                <div className="dayBibleStudy">
                  <p>Have Biblestudy: </p>
                  {days.BibleStudy}
                </div>
                <div className="daySatisfied">
                  <p>Satisfied with the day: </p>
                  {days.Satisfied}
                </div>
                <div className="dayStressed">
                  <p>Stressed out: </p>
                  {days.Stressed}
                </div>
                <div className="dayGoodEvent">
                  <p>Good Event: </p>
                  {days.GoodEvent}
                </div>
                <div className="dayBadEvent">
                  <p>Bad Event: </p>
                  {days.BadEvent}
                </div>
                <div className="dayMeals">
                  <p>Amount of meals: </p>
                  {days.Meals}
                </div>
                <div className="dayStressedOut">
                  <p>Stressed out level: </p>
                  {days.StressedOut}
                </div>
                <div className="dayHealthy">
                  <p>How healthy: </p>
                  {days.Healthy}
                </div>
                <div className="daySleep">
                  <p>How much sleep: </p>
                  {days.Sleep}
                </div>
                <div className="dayHappy">
                  <p>How happy: </p>
                  {days.Happy}
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
