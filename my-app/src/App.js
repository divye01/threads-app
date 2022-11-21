import React, {Component} from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/home";


class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/*" element={<Home />} />
      </Routes>
    );
  }
}

export default App;
