import React from 'react'; 
import 'mdbreact/dist/css/mdb.css'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap';
import {Button} from 'react-bootstrap';
import Test from './profile/Test';
import Footer from './profile/Footer';

import './App.css';


const App = () => {
  // 
  const handleClick = () =>{
    alert(`check point props react !!!`)
  }
  // 
  return (
    <div className="App">
     
<Test name="هند صبري "> 

<Button variant="primary" onClick={()=>handleClick()}>... إقرا المـزيـد</Button>
  
</Test>

<Footer/>

    </div>
  );
}

export default App;
