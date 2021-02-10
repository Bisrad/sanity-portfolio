import { Link } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Button from "../theme/Button"

export default function NotFound() {
  return (
    <Layout >
    <Container style={{ justifyContent: 'center' }}>
      <h1>Page Not Found</h1>
      <p >Oops, we couldn't find this page!</p>
      <Button primary as="a" href="/">
      Back to Home
     </Button>
    </Container>
    </Layout>
  )
}