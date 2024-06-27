import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoriesList from './StoriesList';
import StoryDetails from './StoryDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StoriesList />} />
        <Route path="/story/:id" element={<StoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
