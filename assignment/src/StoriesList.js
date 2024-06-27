import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StoriesList.css';  // Create this file for styles

const StoriesList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('https://child.onrender.com/api/sciencefiction')
      .then(response => {
        setStories(response.data);
       console.log(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="stories-container">
      {stories.map(story => (
        <div key={story.id} className="story-card">
          <img src={`https://ik.imagekit.io/dev24/${story?.Image[0]}`} alt={story.title} />
          <h2>{story.Title}</h2>
          <Link to={`/story/${story._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default StoriesList;
