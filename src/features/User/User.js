import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./User.css"

const User = () => {
    const { userId } = useParams();

    const selectedUser = useSelector((state) =>
        state.users.value.find((user) => user.id === Number(userId))
    );

    return (
        <div className="user-info">
            <div className="user-card">
                <h1 className="username">{selectedUser.login}</h1>
                <img
                    className="user-avatar"
                    src={selectedUser.avatar_url}
                    alt="avatar for user"
                />
                <h2 className="username">{selectedUser.name}</h2>
                <p>{selectedUser.location || 'Middle Earth'}</p>
            </div>
        </div>
    );
};

export default User;