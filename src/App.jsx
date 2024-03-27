import React from "react";
import Home from "./Pages/Home";
import Room from "./Pages/Room";
import {Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:roomId" element={<Room/>}/>

      </Routes>
  );
};

export default App;
