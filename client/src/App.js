import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Memories from './pages/Memories';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/donate' component={Donate} />
            <Route exact path='/contactus' component={ContactUs} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/memories' component={Memories} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;