import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './SearchForm.css';

const SearchForm = ({ onHandleSubmit }) => {
    const [username, setUsername] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        onHandleSubmit(username);
        setUsername('');
    }

    return (
        <div className="search-form">
            <Form className="font" onSubmit={handleSubmit}>
                <label>
                    Username:
                    <br></br>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                </label>
                <Button className="search-button" type="submit">Search</Button>
            </Form>
        </div>
    )
};

export default SearchForm;