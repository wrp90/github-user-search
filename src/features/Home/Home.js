import { addUser, selectUsers } from "../../app/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from "../SearchForm/SearchForm";
import UserCardList from "../UserCardList/UserCardList";

const Home = () => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    const searchUsername = async (username) => {
        const userResponse = await fetch(
            `https://api.github.com/users/${username}`
        );
        const user = await userResponse.json();
        dispatch(addUser(user));
    };

    return (
        <div className="container">
            <SearchForm onHandleSubmit={searchUsername} />
            <UserCardList users={users} />
        </div>
    );
};

export default Home;
