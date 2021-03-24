import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import Gist from './components/Gist'
import { getGistForUser } from './services/gistService'



const App = () => {

  const [username, setUsername] = useState('');
  const [fiteredGist, setFilteredGist] = useState('')

  useEffect(() => {
    // seacrh function
    const filterUsername = () => {
      if (username)
        getGistForUser(username)
          .then(details => {
            console.log(details, 'details')
            setFilteredGist(details.data)
          })
          .catch(err => console.log(err, 'er'))
    }
    filterUsername()
  }, [username])

  console.log(fiteredGist, 'fiteredGist')

  return (
    <Wrapper className="App" data-testid="app">
      <Header onChange={(e) => setUsername(e.target.value)} />
      <GlobalStyles />
      <Gist fiteredGist={fiteredGist} />

    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
