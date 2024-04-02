import { listDays } from '../graphql/queries';
import config from '../amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { Paper, Button} from '@mui/material'
import React, { useState, useEffect } from 'react';
Amplify.configure(config);

const client = generateClient();

export const Home = () => {
  const [Days, setDays] = useState([]);
  const [isShown, setIsShown] = useState(false);

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

    const handleClick = event => {
      setIsShown(current => !current);
    }

return (
    <div class= "bg-ivory">
      <body class= 'cards padding'>
        <div className="daysList">
          { Days.map(Days => {
            return(
              <Paper variant="outlined" elevation={2} >
                <div className="dayCard">
                  <b><div className="dayId"><p>Day:</p>{Days.id}</div></b> 

                  <p><div className="dayHappy"><p>Happy:</p>{Days.Happy}</div></p>
                  <br/>
                  
                  <div className="daySleep"><p>Sleep:</p>{Days.Sleep}</div>
                  <br/>
                  
                  <div className="dayHealthy"><p>Healthy:</p>{Days.Healthy}</div>
                  <br/>
                  
                  <div className="dayMeals"><p>Meals:</p>{Days.Meals}</div>

                  <Button onClick={handleClick}>Full Day</Button>
                  {isShown && (
                    Days.map((Days, index) => (
                      <div key={Days.id ? Days.id : index} style={styles.Days}>
                        <p style={styles.DaysId}>{Days.id}</p>
                        <p style={styles.DaysDesc}>{JSON.stringify(Days.Desc)}</p>
                      </div>
                    ))
                  )}
                  </div>
                  
              </Paper>

            )
          })}
        </div>
      </body>
    </div>
  );
}
const styles = {
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  DaysId: { fontSize: 15, fontWeight: 'bold' },
  DaysDesc: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}