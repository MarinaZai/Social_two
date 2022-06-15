import React from "react";
import { Profile } from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = 24395;
    }
    this.props.getUserProfile(profileId);
  }

  render() {
    
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}


export default ProfileContainer;
