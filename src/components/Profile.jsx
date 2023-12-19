import { Outlet, useParams } from "react-router-dom";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefaultProfile from "./DefaultProfile";

const Profile = () => {

    const name = useParams().name
    console.log(name)
    return (
      <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <h2>
            The profile visited here is 
            {name == 'popeye' ? 
                <Popeye /> :
                name == 'spinach' ?
                <Spinach /> :
                <DefaultProfile/>}
        </h2>
      </div>
    );
  };
  
  export default Profile;