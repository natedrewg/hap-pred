import { listDays } from '../graphql/queries';
import config from '../amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { Paper } from '@mui/material'
import React, { useState, useEffect } from 'react';
Amplify.configure(config);

const client = generateClient();

export const Home = () => {
  const [Days, setDays] = useState([]);

  useEffect(() => {
    fetchDays()
  }, [])

  const fetchDays = async () => {
    try{
      const result = await client.graphql({ query: listDays });
      const allDays = result.data.listDays.items;
      console.log('List of Days', allDays);
      setDays(allDays)
    } catch (error){
      console.log('error on fetching days', error)
    }
  }

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

return (
    <div class= "bg-ivory">
      <body class= 'cards'>
        <div className="daysList">
          { Days.map(Days => {
            return(
              <Paper variant="outlined" elevation={2} >
                <div className="dayCard">
                  
                  <b><div className="dayId"><p>Day:</p>{Days.id}</div></b>
                  <br/>
                  <button type="button" class ="collapsible" >
                    More
                  </button>
                  <div class= "content">
                    <div className="dayHappy"><p>Happy:</p>{Days.Happy}</div>
                  <br/>
                  
                  <div className="daySleep"><p>Sleep:</p>{Days.Sleep}</div>
                  <br/>
                  
                  <div className="dayHealthy"><p>Healthy:</p>{Days.Healthy}</div>
                  <br/>
                  
                  <div className="dayMeals"><p>Meals:</p>{Days.Meals}</div>
                  <br/>
                  
                  <div className="dayDesc"><p>My short description of the day:</p>{Days.Description}</div>
                  </div>
                  
                </div>
              </Paper>

            )
          })}
        </div>
      </body>
    </div>
  );
}