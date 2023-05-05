import './SearchForm.css';
import { useState } from 'react';

const SearchForm = ({ onHandleSubmit }) => {
    const [username, setUsername] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        onHandleSubmit(username);
        setUsername('');
    }

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <label>
                    username:
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                </label>
                <input type="submit" value="Search"></input>
            </form>
        </div>
    )
};

export default SearchForm;