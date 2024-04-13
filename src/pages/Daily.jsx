import { DaysCreateForm } from "../ui-components";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import React from "react";
import { withAuthenticator, Button } from '@aws-amplify/ui-react';

Amplify.configure(config);

export function Daily({ signOut, user }) {
  const allowedUser = 'NathanGilbert';

  console.log('Allowed User:', allowedUser);
  console.log('User:', user);
  console.log('User Username:', user ? user.username : 'No User');

  
  return (
    <div className="App">
      {user && user.username === allowedUser ? (
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
export default withAuthenticator(Daily);