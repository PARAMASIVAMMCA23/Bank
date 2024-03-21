import Card from 'react-bootstrap/Card';
import bank from './images/background img 3.jpeg';
import './App.css'

function Home(){
return(<>
<Card className="text-center">
<Card.Header className='header'>&quot; Taking Banking Technology to the Common Man &quot;</Card.Header>
<Card.Body>
<Card.Title className='title'>BAD BANK</Card.Title>
<Card.Text>
<img className='homeimg' src={bank} alt='' height='400px' width='700px'></img>
<p className='msg'> Welcome to Bad Bank <br></br>
&quot; Where Your Money is Our Money &quot;<br></br>
Create an Account and Start Bad Banking Right Away.</p>
</Card.Text>
</Card.Body>
<Card.Footer className="text-muted">Developed by &copy;PARAMASIVAM</Card.Footer>
</Card>
</>)
}
export default Home;
