import { listDays } from "../graphql/queries";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import Modal from "../ui-components/Modal/Modal";

Amplify.configure(config);
const client = generateClient();


export const Home = () => {
  return (
    <div className="bg-ivory">
      
    </div>
  );
};
