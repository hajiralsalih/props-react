import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap';
import {Button} from 'react-bootstrap';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,  MDBBtn
} from 'mdb-react-ui-kit';


 const Footer=(props)=> {
  return (
    
    <MDBFooter className='text-center' color='black' bgColor='light'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
        <p> 
        <Button variant="primary"
          onClick={() => props.getName(props.name)}> ... إقرا المـزيـد</Button>
        </p>
          
          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='tiktok' />
          </a>
        </section>

      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    
        © 2022 Copyright:
        <a className='text-white' href='#'>
          hajiralsaleh.com
        </a>

      </div>
    </MDBFooter>
  );
}
export default  Footer