import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ Days }) => {
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
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>
              <b>Full Day</b>
            </h2>
            <b>
              <div className="dayId">
                <p>Day:</p>
                {Days.id}
              </div>
            </b>
            <div className="dayPractice">
              <p>Practice: </p>
              {Days.Practice}
            </div>
            <div className="dayIndo">
              <p>Individual Work: </p>
              {Days.Indo}
            </div>
            <div className="dayLift">
              <p>Lift: </p>
              {Days.Lift}
            </div>
            <div className="dayWallball">
              <p>Wallball: </p>
              {Days.WallBall}
            </div>
            <div className="dayPT">
              <p>PT: </p>
              {Days.PT}
            </div>
            <div className="dayGameday">
              <p>Gameday: </p>
              {Days.Game}
            </div>
            <div className="dayNap">
              <p>Nap: </p>
              {Days.Nap}
            </div>
            <div className="dayHomework">
              <p>Homework: </p>
              {Days.Homework}
            </div>
            <div className="dayVideoGame">
              <p>Videogames: </p>
              {Days.VideoGames}
            </div>
            <div className="dayJessCall">
              <p>Call or hangout with Jess: </p>
              {Days.JessCall}
            </div>
            <div className="dayHangout">
              <p>Hangout with friends: </p>
              {Days.Hangout}
            </div>
            <div className="dayParents">
              <p>Call or hangout with parents: </p>
              {Days.Parents}
            </div>
            <div className="dayClasses">
              <p>Classes: </p>
              {Days.Classes}
            </div>
            <div className="dayPrayed">
              <p>Prayed: </p>
              {Days.Prayed}
            </div>
            <div className="dayBibleTime">
              <p>Read the Bible: </p>
              {Days.BibleTime}
            </div>
            <div className="dayBibleStudy">
              <p>Have Biblestudy: </p>
              {Days.BibleStudy}
            </div>
            <div className="daySatisfied">
              <p>Satisfied with the day: </p>
              {Days.Satisfied}
            </div>
            <div className="dayStressed">
              <p>Stressed out: </p>
              {Days.Stressed}
            </div>
            <div className="dayGoodEvent">
              <p>Good Event: </p>
              {Days.GoodEvent}
            </div>
            <div className="dayBadEvent">
              <p>Bad Event: </p>
              {Days.BadEvent}
            </div>
            <div className="dayMeals">
              <p>Amount of meals: </p>
              {Days.Meals}
            </div>
            <div className="dayStressedOut">
              <p>Stressed out level: </p>
              {Days.StressedOut}
            </div>
            <div className="dayHealthy">
              <p>How healthy: </p>
              {Days.Healthy}
            </div>
            <div className="daySleep">
              <p>How much sleep: </p>
              {Days.Sleep}
            </div>
            <div className="dayHappy">
              <p>How happy: </p>
              {Days.Happy}
            </div>
            <div className="dayDescription">
              <p>The Description of the day: </p>
              {Days.Description}
            </div>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
