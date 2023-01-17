import Card from 'react-bootstrap/Card';

function ParticipantCard({participant}) {
  return (
    <Card style={{ width: '18rem'}}>
      <figure className='imgContainer'><Card.Img variant="top" src={participant.image}/></figure>
      <Card.Body>
        <Card.Title>{participant.name}</Card.Title>
        <Card.Link href={participant.website}>More info</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ParticipantCard;