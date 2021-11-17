import {
  Heading,
  List,
  ListItem,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from "../Components/Layout"

export default function Homepage() {
  return (
    <Layout>
      <Heading>Home page</Heading>
      {/* <Text my={6}>{currentUser?.email}</Text> */}     
      <Heading size='md' mt={8}>
        Some other links (only for reference):
      </Heading>
      <List>
        <ListItem>
          <Link to='/test'>test page</Link>
        </ListItem>
      </List>
    </Layout>
  )
}
