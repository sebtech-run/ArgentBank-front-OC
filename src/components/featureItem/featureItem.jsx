import React from 'react';

import '../../styles/components/featureItem.css';

export default function FeatureItem(props) {
  return (
    <div className="feature-item">
      <img src={props.iconUrl} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p className='feature-item-text'>{props.text}</p>
    </div>
  )
}