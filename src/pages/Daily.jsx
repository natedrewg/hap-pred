import { DaysCreateForm } from "../ui-components";
import { listDays } from "../graphql/queries";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import React, { useState, useEffect } from "react";

Amplify.configure(config);
const client = generateClient();

export const Daily = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetchDays();
  }, []);

  const fetchDays = async () => {
    try {
      const result = await client.graphql({ query: listDays });
      const allDays = result.data.listDays.items;

      console.log("List of Days", allDays);
      setDays(allDays || []);
    } catch (error) {
      console.log("error on fetching days", error);
    }
  };

  const countDays = () => {
    return days.length;
  };

  return (
    <div className="App">
      <body className="padding showHide">
        <div className="flow-root invisible sm:invisible md:visible lg:visible xl:visible">
          <div className="bg-sage justify-center pl-4 pr-4 flex">
            <DaysCreateForm />
          </div>
        </div>
      </body>

      <body className="noPadding">
        <div className="flow-root visible sm:visible md:invisible lg:invisible xl:invisible">
          <div classNames="bg-sage float-center text-3xl p-4">
            <h1>Welcome to my daily form!</h1>
          </div>
          <div className="bg-sage justify-center pl-4 pr-4 flex">
            <DaysCreateForm />
          </div>
        </div>
      </body>
    </div>
  );
};
