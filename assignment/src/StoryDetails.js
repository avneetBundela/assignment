import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StoryDetails.css';

const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    axios.get(`https://child.onrender.com/api/sciencefiction/${id}`)
      .then(response => {
        setStory(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="story-details">
      {/* <img src={`https://ik.imagekit.io/dev24/${story.Image[0]}`} alt={story.Title} />
      <h2>{story.Title}</h2> */}
      <div className="tabs">
        <div className="tab">
          <input type="radio" id="tab1" name="tab-group" defaultChecked />
          <label htmlFor="tab1">Tab 1</label>
          <div className="content">
          <h2>{story.Title}</h2>
            {story.Image.map((img, index) => (
              <img key={index} src={`https://ik.imagekit.io/dev24/${img}`} alt={story.Title} />
              
            ))}
          </div>
        </div>
        <div className="tab">
          <input type="radio" id="tab2" name="tab-group" />
          <label htmlFor="tab2">Tab 2</label>
          <div className="content">
            {story.Storyadvenure.content.map((adventure, index) => (
              <div key={index}>
                {adventure.Storyimage.map((img, imgIndex) => (
                  <img key={imgIndex} src={`https://ik.imagekit.io/dev24/${img}`} alt={story.Title} />
                ))}
                {adventure.Paragraph.map((para, paraIndex) => (
                  <p key={paraIndex}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="tab">
          <input type="radio" id="tab3" name="tab-group" />
          <label htmlFor="tab3">Tab 3</label>
          <div className="content">
            <p>{story.Title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
