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

return (
    <div class= "bg-ivory">
      <body class = "padding">
        <div className="daysList">
          { Days.map(Days => {
            return(
              <Paper variant="outlined" elevation={2} >
                <div className="dayCard">
                  <p>The day:</p>
                  <b><div className="dayId">{Days.id}</div></b>
                  <p>How happy I was out of 6 this day:</p>
                  <div className="dayHappy">{Days.Happy}</div>
                  <p>How much sleep I got the day before:</p>
                  <div className="daySleep">{Days.Sleep}</div>
                  <p>How healthy I felt at the end of the day:</p>
                  <div className="dayHealthy">{Days.Healthy}</div>
                  <p>How many meals I had this day:</p>
                  <div className="dayMeals">{Days.Meals}</div>
                  <p>My short description of the day:</p>
                  <div className="dayDesc">{Days.Description}</div>
                </div>
              </Paper>

            )
          })}
        </div>
      </body>
    </div>
  );
}