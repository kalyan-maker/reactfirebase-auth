import { chakra, Container, Heading ,  List, ListItem,} from '@chakra-ui/react'
import React from 'react'
import { Link} from "react-router-dom"
import { Layout } from '../Components/Layout'
// import { useAuth } from "../Context/AuthContext"

export default function Profilepage() {
  // const { currentUser } = useAuth()
  return (
    <Layout>
      <Heading>Profile page</Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre p={4}>
        <List>
        <ListItem>
          <Link to='/reset-password'>reset page</Link>
        </ListItem>
        <ListItem>
          <Link to='/forgot-password'>forgot page</Link>
        </ListItem>
        <ListItem>
          <Link to='/test'>test page</Link>
        </ListItem>
        </List>
        </chakra.pre>
      </Container>
    </Layout>
  )
}
