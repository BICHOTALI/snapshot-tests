import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function GitHubCard() {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/126828743?v=4" />
      <Card.Body>
        <Card.Title>GitHub Profile: BICHOTALI</Card.Title>
        <Card.Text>
          I LOVE CODING!
        </Card.Text>
        <Button variant="primary">Go Visit!</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default GitHubCard