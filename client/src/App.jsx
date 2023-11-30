
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.css'
import './font-awesome.min.css'

import Nav from './components/Nav'
// import Home from './pages/Home'
import {Outlet} from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {


  return (
  <>
  <ApolloProvider client = {client}>
    <Nav/>
    <Outlet/>
    </ApolloProvider>
    {/* <Home/> */}

    {/* <Login/>

    <Signup/> */}
    </>
  )
}

export default App
