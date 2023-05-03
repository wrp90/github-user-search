import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import UserCardList from './components/UserCardList/UserCardList';

function App() {
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
}

export default App;
