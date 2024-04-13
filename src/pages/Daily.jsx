import { DaysCreateForm } from "../ui-components";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import React from "react";

Amplify.configure(config);

export const Daily = ({ user }) => {
  const allowedUser = 'natedrewg@gmail.com';
  console.log(user.username);
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
