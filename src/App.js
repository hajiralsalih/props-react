import React from 'react'; 
import 'mdbreact/dist/css/mdb.css'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap';
import {Button} from 'react-bootstrap';
import Test from './profile/Test';
import Footer from './profile/Footer';
import h  from "./profile/img/1.jpeg";
import './App.css';


const App = () => {
  // 
  const getName = (name) => {
    alert(`Hello, She is  ${name} !`);
  };

  return (
    <div className="App">
     
<Test name="هند صبري "
bio="
ولدت في ولاية قبلي في تونس، وعرفت منذ مشاركتها
في فيلمين سينمائيين "
profession="
نالت عام 2004 جائزة أحسن ممثلة
من المركز الكاثوليكي المصري، عن دورها في فيلم أحلى الأوقات.
شاركت في نوفمبر 2007 في مهرجان دمشق السينمائي الدولي 
كعضوة في لجنة التحكيم لمسابقة الأفلام الطويلة."
>

<div  className='p-5 text-center bg-image'
        style={{ backgroundImage:  `url(${h})`, height: 700 }}> 
        </div>
</Test>

<Footer
name="هند صبري "
getName={getName}>
  
</Footer>

    </div>
  );
}

export default App;
