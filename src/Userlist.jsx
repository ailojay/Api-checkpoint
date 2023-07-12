import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserListWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const UserItem = styled.li`
  margin-bottom: 10px;
`;

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserListWrapper>
      <Title>List of Users</Title>
      <ul>
        {listOfUsers.map(user => (
          <UserItem key={user.id}>{user.name}</UserItem>
        ))}
      </ul>
    </UserListWrapper>
  );
};

export default UserList;
