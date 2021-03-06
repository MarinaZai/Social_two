import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer"
import  ProfileContainer from "./ProfileContainer"
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    auth: state.auth,
    status: state.profilePage.status
   })

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect 
)(ProfileContainer);

