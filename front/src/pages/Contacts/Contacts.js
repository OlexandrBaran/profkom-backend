import { Button, Card, Container } from "react-bootstrap";  
const Contacts = () => {

    return(
      <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <Card style={{ width: '18rem' }} className="d-flex flex-row">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
  </Container>
    );
}

export default Contacts;