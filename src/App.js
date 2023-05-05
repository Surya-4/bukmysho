import "./App.css";

import React, { useState } from "react";
import Navbar2 from "./components/Navbar";
// import News from './components/News';
import Movie from "./components/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from "./components/Summary";
import Book from "./components/Book";
// import LoadingBar from 'react-top-loading-bar'

const App = () => {
  // const pageSize = 5;
  // const apiKey = process.env.REACT_APP_API;
  // const [progress, setProgress] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar2 />
                <Movie />
              </>
            }
          ></Route>
          <Route
            exact
            path="/movie/:movie_id"
            element={
              <>
                <Navbar2 />
                <Summary />
              </>
            }
          ></Route>
          <Route
            exact
            path="/book/:movie_id"
            element={
              <>
                <Navbar2 />
                <Book/>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
{
  /* <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route> 
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route> 
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route> 
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route> 
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route> 
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>  
          <Route exact path="/" element={<Movie setProgress={setProgress}/>}></Route>
        </Routes>
        </Router> */
}
