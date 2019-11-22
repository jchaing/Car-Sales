import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

import { removeFeature } from '../actions'

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature} id={props.car.features.length} additionalFeatures={props.additionalFeatures}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: {
      features: state.car.features
    },
    additionalFeatures: state.additionalFeatures 
  } 
}

export default connect(mapStateToProps, {removeFeature})(AddedFeatures);
