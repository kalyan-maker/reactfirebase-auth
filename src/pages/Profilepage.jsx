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
      </Container>
    </Layout>
  )
}
