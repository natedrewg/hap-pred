import React, { useState } from "react";
import { Paper } from "@mui/material";
import "./Modal.css";

export default function Modal(Days) {
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
            {Days.map((Days) => {
              return (
                <Paper variant="outlined" elevation={2}>
                  <div className="dayCard">
                    <b>
                      <div className="dayId">
                        <p>Day:</p>
                        {Days.id}
                      </div>
                    </b>
                    <div className="day">
                      <p>Practice: </p>
                      {Days.Practice}
                    </div>
                    <div className="day">
                      <p>Individual Work: </p>
                      {Days.Indo}
                    </div>
                    <div className="day">
                      <p>Lift: </p>
                      {Days.Lift}
                    </div>
                    <div className="day">
                      <p>Wallball: </p>
                      {Days.WallBall}
                    </div>
                    <div className="day">
                      <p>PT: </p>
                      {Days.PT}
                    </div>
                    <div className="day">
                      <p>Gameday: </p>
                      {Days.Game}
                    </div>
                    <div className="day">
                      <p>Nap: </p>
                      {Days.Nap}
                    </div>
                    <div className="day">
                      <p>Homework: </p>
                      {Days.Homework}
                    </div>
                    <div className="day">
                      <p>Videogame: </p>
                      {Days.VideoGames}
                    </div>
                    <div className="day">
                      <p>Call or hangout with Jess: </p>
                      {Days.JessCall}
                    </div>
                    <div className="day">
                      <p>Hangout with friends: </p>
                      {Days.Hangout}
                    </div>
                    <div className="day">
                      <p>Call or hangout with parents: </p>
                      {Days.Parents}
                    </div>
                    <div className="day">
                      <p>Classes: </p>
                      {Days.Classes}
                    </div>
                    <div className="day">
                      <p>Prayed: </p>
                      {Days.Prayed}
                    </div>
                    <div className="day">
                      <p>Read the Bible: </p>
                      {Days.BibleTime}
                    </div>
                    <div className="day">
                      <p>Have Biblestudy: </p>
                      {Days.BibleStudy}
                    </div>
                    <div className="day">
                      <p>Satisfied with the day: </p>
                      {Days.Satisfied}
                    </div>
                    <div className="day">
                      <p>Stressed out: </p>
                      {Days.Stressed}
                    </div>
                    <div className="day">
                      <p>Good Event: </p>
                      {Days.GoodEvent}
                    </div>
                    <div className="day">
                      <p>Bad Event: </p>
                      {Days.BadEvent}
                    </div>
                    <div className="day">
                      <p>Amount of meals: </p>
                      {Days.Meals}
                    </div>
                    <div className="day">
                      <p>Stressed out level: </p>
                      {Days.StressedOut}
                    </div>
                    <div className="day">
                      <p>How healthy: </p>
                      {Days.Healthy}
                    </div>
                    <div className="day">
                      <p>How much sleep: </p>
                      {Days.Sleep}
                    </div>
                    <div className="day">
                      <p>How happy: </p>
                      {Days.Happy}
                    </div>
                    <div className="day">
                      <p>The Description of the day: </p>
                      {Days.Description}
                    </div>
                    <button className="close-modal" onClick={toggleModal}>
                      Close
                    </button>
                  </div>
                </Paper>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
