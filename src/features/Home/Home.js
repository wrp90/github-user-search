import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import UserCardList from "../UserCardList/UserCardList";

const Home = () => {
    const [users, setUsers] = useState([]);

    const searchUsername = async (username) => {
        const userResponse = await fetch(
            `https://api.github.com/users/${username}`
        );
        const user = await userResponse.json();
        setUsers([...users, user]);
    };

    return (
        <div className="container">
            <SearchForm onHandleSubmit={searchUsername} />
            <UserCardList users={users} />
        </div>
    );
};

export default Home;
