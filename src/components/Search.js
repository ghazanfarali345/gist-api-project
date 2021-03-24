import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { getGistForUser } from '../services/gistService'

const Search = () => {

  // const [username, setUsername] = useState('');
  // console.log(username)
  // useEffect(() => {
  //   const filterUsername = () => {
  //     try {
  //       if (username)
  //         getGistForUser(username)
  //           .then(details => console.log(details, 'details'))
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   filterUsername()

  // }, [])

  const [list, setList] = useState([]);

  async function fetchRepos() {
    await octokit.repos
      .listForUser({
        username: 'abhinav-anshul',
      })
      .then((details) => {
        setList((prevState) => {
          prevState.push(details.data[0].name);
          return prevState;
        });
      });

    console.log('List Array', list);
    console.log([...list]);
  }

  useEffect(() => {
    (async () => {
      await fetchRepos();
    })();
  }, []);



  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input placeholder="Search Gists for the username"
          onChange={(e) => setUsername(e.target.value)} />
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
