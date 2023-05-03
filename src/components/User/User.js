import { useParams } from "react-router"

const User = () => {
    const { userId } = useParams();

    return (
        <div>Hello {userId}!</div>
    )
}