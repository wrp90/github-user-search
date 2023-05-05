import { useParams } from "react-router-dom";

const User = () => {
    const { userId } = useParams();

    return (
        <div>
            <h1>Hello, {userId}</h1>
        </div>
    )
};

export default User;