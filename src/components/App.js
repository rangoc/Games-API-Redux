import React from 'react';
// Components and Pages
import Home from 'pages/Home';
import Nav from 'components/Nav';
// Styles
import GlobalStyle from 'components/GlobalStyle';
// Router
import { Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
