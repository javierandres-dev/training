import participants from "../json/participants.json"
import CardGroup from 'react-bootstrap/CardGroup';
import ParticipantCard from "./ParticipantCard"

export default function Main() {
const cards = participants.map((participant)=><ParticipantCard key={participant.id} participant={participant} />)
  return <main><CardGroup>{cards}</CardGroup></main>
}