import { useParams } from "react-router-dom";
import { StyledUser } from "./styles.js";
import { USERS } from "../../constants/users"
import { useNavigate } from "react-router-dom";




const User = () => {
    const params = useParams();
    const navigate = useNavigate();
    const userSelected = USERS.find(user => user.userId === params.userId)
    return (
        <>
            <button onClick={() => navigate(`/`)}>Back To Users</button>
            <StyledUser>
                <img src={userSelected.profileImage} alt="" />
                <p>Hi, My name is {userSelected.name}</p>
                <p>I´m {userSelected.age}</p>
                <p>My username is  {userSelected.username}</p>
                <p>You can contact me in {userSelected.email}</p>
                <p>My Address is:</p>
                <p>{userSelected.address.street}</p>
                <p>{userSelected.address.city}</p>
                <p>{userSelected.address.zipCode}</p>
                <p>You can call me at {userSelected.phone}</p>
            </StyledUser>
        </>
    );
}

export default User;

