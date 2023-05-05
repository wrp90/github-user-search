import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <h2 className="user-username">{user.login}</h2>
            <img 
                className="user-avatar" 
                src={user.avatar_url} 
                alt="avatar for user"
            />
            <Link style={{ display: 'block'}} to={`/users/${user.id}`}>
                See User's details
            </Link>
        </div>
    )
};

export default UserCard;