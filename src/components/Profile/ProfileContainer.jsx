import React from 'react';
import { Profile } from './Profile';
import axios from 'axios';

class ProfileContainer extends React.Component {
    profileId = this.props.router.params.profileId;

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.profileId}`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

export default ProfileContainer

//let mapStateToProps = (state) => ({
 //profile: state.profilePage.profile
//})
//export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)