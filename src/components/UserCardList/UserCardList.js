import './UserCardList.css';
import UserCard from '../UserCard/UserCard';

const UserCardList = ({ users }) => {
    const renderUsers = () => {
        return users.length ? (
            <div className="user-card-list">
                {users.map((user) => {
                    return <UserCard user={user} key={user.id} />
                })}
            </div>
        ) : (
            <div>No Users</div>
        )
    }
    return (
        <div className="user-card-list-container">
            <h1 className="users-title">Users</h1>
            <div className="user-card-list">
                {renderUsers()}
            </div>
        </div>
    )
};

export default UserCardList;