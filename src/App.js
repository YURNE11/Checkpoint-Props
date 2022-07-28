import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import style from './style.css'
import Profile from './Components/Profile/Profile';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App" style={{backgroundColor:"whitesmoke", height:"98vh"}}>
      <Navbar></Navbar>
      <div style={{maxWidth:"100vw"}}>
        <h1 className="title" style={{marginBottom:100}}>CHECKPOINT <br/>REACT PROPS</h1>
        <br/>
      </div>
      <Profile
      firstname="NGUESSAN"
      lastname="Kouassi Jean-Joel"
      profession="Web-developpeur & Infographe Graphiste"
      bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      
      >/img/profile.jpg</Profile>
      
    </div>
  );
}
//Profile.PropTypes=PropTypes.string 
Profile.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
}

Profile.defaultProps = {
  firstname: "NGUESSAN",
  lastname: "Kouassi Jean-Joel",
  profession: "Web-developpeur & Infographe Graphiste",
  bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}


export default App;
