import React from 'react';

const AddedFeature = props => {
  console.log(props);
  const featureItem = props.additionalFeatures.filter(feature => feature.name === props.feature)
  console.log(featureItem[0].price)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature, featureItem[0].price)}>X</button>
      {props.feature}
    </li>
  );
};

export default AddedFeature;
