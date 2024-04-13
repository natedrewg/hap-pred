import { DaysCreateForm } from "../ui-components";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

import React, { useState, useEffect } from "react";
import { getCurrentUser } from 'aws-amplify/auth';

Amplify.configure(config);

export const Daily = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  async function fetchCurrentUser() {
    try {
      const { username } = await getCurrentUser();
      console.log(`The username: ${username}`);
      setUsername(username);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
    {username === 'NathanGilbert' ? ( 
        <>
          <body className="padding showHide">
            <div className="flow-root invisible sm:invisible md:visible lg:visible xl:visible">
              <div className="bg-sage justify-center pl-4 pr-4 flex">
                <DaysCreateForm />
              </div>
            </div>
          </body>

          <body className="noPadding">
            <div className="flow-root visible sm:visible md:invisible lg:invisible xl:invisible">
              <div className="bg-sage justify-center pl-4 pr-4 flex">
                <DaysCreateForm />
              </div>
            </div>
          </body>
        </>
        ) : (
          <p>You are not authorized to access this feature.</p> 
        )}
    </div>
  );
};
