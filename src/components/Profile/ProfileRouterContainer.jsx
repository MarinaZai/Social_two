import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import {setUserProfile} from "../../redux/profile-reducer"
import ProfileContainer from "./ProfileContainer"
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
    auth: state.auth
   })
export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));