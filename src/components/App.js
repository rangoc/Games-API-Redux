import React from 'react';
// Components and Pages
import Home from 'pages/Home';
// Styles
import GlobalStyle from 'components/GlobalStyle';
// Router
import { Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
