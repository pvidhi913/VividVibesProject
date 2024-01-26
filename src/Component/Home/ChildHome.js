import React from 'react';
import './Home.css';
import { Container, Card, Button } from 'react-bootstrap';

const ChildHome = () => {
  const handleClick = (amount, e) => {
    
    e.preventDefault();
    console.log('You clicked submit.');
    if(sessionStorage.getItem('userSession')){
    const url = `http://localhost:5000/payment/checkout/${amount}`;
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        items: [
          { amount: amount}
        ]
      })
    }).then(res => {
      if(res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    }).then(({url}) => {
      window.location = url
    }).catch(e => {
      console.error(e.error);
    }
    );
    }
else{
  window.alert("Please Log in");
  window.location = "/Login";
}
};
  return (
    <section id="hero">
    <div className="content text-center">
        <Container>
          <h1 className="display-4 fw-bold text-center">We Bring Your Events To Life</h1>
        </Container>
      </div>
    <section className="section3 sm-mt-3">
      <h2 className="text-center my-4 package">Our Packages</h2>
      <Container>
        <div className="row d-flex justify-content-center">
          {/* Card 1 */}
          <div className="col-md-3">
            <Card className="shadow-sm mb-3 mt-5 border-0" style={{ maxWidth: '18rem' }}>
            <Card.Header className="bg-transparent border-0 px-2 py-0 price" style={{ fontSize: '1.3em' }}>$300</Card.Header>
              <Card.Body className="text-success">
                <Card.Title className="Business text-center text-dark">Business Fair</Card.Title>
                <Card.Text style={{ color: 'white' }} className="text-start fair"> For most businesses event like book fair, craft fair worksss.
                </Card.Text>
                
              </Card.Body>
              <Card.Body className="text-success p-2">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-2 col-2 col-sm-2 svg text-center d-flex sm-d-block justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" stroke="white" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                  </div>
                  <div className="col-md-10 col-10 col-10 col-sm-10">
                  <p className="card-text text-start fair" style={{ color: 'white' }}> Limited Space Access </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 btn-lg d-flex justify-content-center align-items-center">
              <Button style={{ backgroundColor: '#F2EDD0', color: 'black' }} onClick={(e) => handleClick(30000, e)} className="rounded-pill px-5 plan-btn">Choose Plan</Button>
              </Card.Footer>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-md-3">
            <Card className="shadow-sm mb-3 mt-5 border-0" style={{ maxWidth: '18rem' }}>
            <Card.Header className="bg-transparent border-0 px-2 py-0 price" style={{ fontSize: '1.3em' }}>$500</Card.Header>
              <Card.Body className="text-success">
                <Card.Title className="Business text-center text-dark">Wedding Basic</Card.Title>
                <Card.Text style={{ color: 'white' }} className="text-start fair"> Joyous union and memorable celebrations unite two hearts
                </Card.Text>
              </Card.Body>
              <Card.Body className="text-success p-2">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-2 col-2 col-sm-2 svg text-center d-flex sm-d-block justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" stroke="white" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                  </div>
                  <div className="col-md-10 col-10 col-10 col-sm-10">
                  <p className="card-text text-start fair" style={{ color: 'white' }}> Limited Space Access </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 btn-lg d-flex justify-content-center align-items-center">
              <Button style={{ backgroundColor: '#F2EDD0', color: 'black' }} onClick={(e) => handleClick(50000, e)} className="rounded-pill px-5 plan-btn">Choose Plan</Button>
              </Card.Footer>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col-md-3">
            <Card className="shadow-sm mb-3 mt-5 border-0" style={{ maxWidth: '18rem' }}>
            <Card.Header className="bg-transparent border-0 px-2 py-0 price" style={{ fontSize: '1.3em' }}>$800</Card.Header>
              <Card.Body className="text-success">
                <Card.Title className="Business text-center text-dark">Private Event</Card.Title>
                <Card.Text style={{ color: 'white' }} className="text-start fair">For most events like Birthday parties and house parties</Card.Text>
              </Card.Body>
              <Card.Body className="text-success p-2">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-2 col-2 col-sm-2 svg text-center d-flex sm-d-block justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" stroke="white" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                  </div>
                  <div className="col-md-10 col-10 col-10 col-sm-10">
                  <p className="card-text text-start fair" style={{ color: 'white' }}> Customer Favorite </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 btn-lg d-flex justify-content-center align-items-center">
              <Button onClick={(e) => handleClick(80000, e)} style={{ backgroundColor: '#F2EDD0', color: 'black' }} className="rounded-pill px-5 plan-btn">Choose Plan</Button>
              </Card.Footer>
            </Card>
          </div>


          {/* Card 4 */}
          <div className="col-md-3">
            <Card className="shadow-sm mb-3 mt-5 border-0" style={{ maxWidth: '18rem' }}>
            <Card.Header className="bg-transparent border-0 px-2 py-0 price" style={{ fontSize: '1.3em' }}>$1000</Card.Header>
              <Card.Body className="text-success">
                <Card.Title className="Business text-center text-dark">Big Event</Card.Title>
                <Card.Text style={{ color: 'white' }} className="text-start fair">For  biggest event like Movie launch, Music Events</Card.Text>
              </Card.Body>
            <Card.Body className="text-success p-2">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-2 col-2 col-sm-2 svg text-center d-flex sm-d-block justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" stroke="white" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                  </div>
                  <div className="col-md-10 col-10 col-10 col-sm-10">
                  <p className="card-text text-start fair" style={{ color: 'white' }}> Limited Space Access </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 btn-lg d-flex justify-content-center align-items-center">
              <Button style={{ backgroundColor: '#F2EDD0', color: 'black' }} onClick={(e) => handleClick(100000, e)} className="rounded-pill px-5 plan-btn">Choose Plan</Button>


              </Card.Footer>
            </Card>
          </div>
        </div>
      </Container>
    </section>
    </section>
  );
}

export default ChildHome;

