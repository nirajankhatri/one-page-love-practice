import React from "react";
// import "../../sass/components/_reviewSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from '../../assets/images/avatar.jpg'

const Review_section = () => {
  return (
    <div className="review-section">
      <div className="rating">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
      </div>
      <p className="review">We've been able to handle many more clients at once since using Starter. It's a must have for any designer.</p>
      <div className="reviewer">
        <h4>Thomas Jenkins</h4>
        <p>Founder, Slack</p>
      </div>
      <div className="avatar-container">
        <img src={avatar} />
        <img src={avatar} />
        <img src={avatar} />
        <img src={avatar} className='selected-avatar' />
        <img src={avatar} />
        <img src={avatar} />
        <img src={avatar} />
      </div>
    </div>
  );
};

export default Review_section;
