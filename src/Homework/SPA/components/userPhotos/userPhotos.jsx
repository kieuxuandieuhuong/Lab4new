import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of UIT project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Typography variant="body1">
      This should be the UserPhotos view of the PhotoShare app. Since
      it is invoked from React Router the params from the route will be
      in property match. So this should show details of user:
      {this.props.match.params.userId}. You can fetch the model for the user from
      window.UITmodels.photoOfUserModel(userId):
        <Typography variant="caption">
          {JSON.stringify(window.UITmodels.photoOfUserModel(this.props.match.params.userId))}
        </Typography>
      </Typography>

    );
  }
}

export default UserPhotos;
