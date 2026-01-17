import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import jsx from "../assets/Photos/jsx.jfif";
import states from "../assets/Photos/states.jfif";
import props from "../assets/Photos/props.jfif";
import reconcilation from "../assets/Photos/reconcilation.jfif";
import page from "../assets/Photos/page.jfif";

const Topics = () => {
  return (
    <>
    <Container>
      <div className="mycards d-flex flex-wrap justify-content-center align-items-center gap-3">
        {/* 1 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={jsx} />
          <Card.Body>
            <Card.Title className="mytitle"><h3>JSX</h3></Card.Title>
            <Card.Text className="mytext"><p>
              JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code directly inside JavaScript, making the structure of user interfaces easier to read and understand.</p>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* 2 */}
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={states} />
      <Card.Body>
        <Card.Title className="mytitle"><h3>State</h3></Card.Title>
            <Card.Text className="mytext"><p>
              State in React is an object that stores data which can change over time and affects how a component looks or behaves. When the state changes, React automatically re-renders the component to update the UI. State is used for dynamic data like counters.</p>
            </Card.Text>
           </Card.Body>
    </Card>
    {/* 3 */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props} />
      <Card.Body>
        <Card.Title className="mytitle"><h3>Props</h3></Card.Title>
            <Card.Text className="mytext"><p>
              Props (short for properties) are used in React to pass data from a parent component to a child component.</p>
            </Card.Text>
           </Card.Body>
    </Card>
    {/* 4 */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={reconcilation} />
      <Card.Body>
        <Card.Title className="mytitle"><h3>Reconciliation</h3></Card.Title>
            <Card.Text className="mytext"><p>
              Reconciliation in React is the process where React compares the new virtual DOM with the previous one to find what has changed. After this comparison, React updates only the changed parts of the real DOM.</p>
            </Card.Text>
           </Card.Body>
    </Card>
    {/* 5 */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={page} />
      <Card.Body>
        <Card.Title className="mytitle"><h3>Single Page Application</h3></Card.Title>
            <Card.Text className="mytext"><p>
              A single page application (SPA) in React is a website that loads once and updates content dynamically without reloading the page. React swaps components smoothly, making it feel like a fast, native app.</p>
            </Card.Text>
           </Card.Body>
    </Card>
      </div>
      </Container>
    </>
  );
};

export default Topics;
