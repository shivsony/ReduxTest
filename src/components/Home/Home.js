import React from 'react';

import MainButton from "../MainButton/MainButton";
import MainTable from "../MainTable/MainTable";
import "./Home.css";

const Home = () => (
    <div className="home">
        <h1>this is Taskinetics</h1>
        <div className="home-body">
          <MainTable />
        </div>
    </div>
);

export default Home;