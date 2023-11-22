
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './components/pages/Home'
import {Outlet} from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink),
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
