import React from "react";
import { Profile } from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = 24395;
    }
    this.props.getUserProfile(profileId);
    //setTimeout(() => {
      this.props.getStatus(profileId);
    //},1000)
   
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}
export default ProfileContainer;
