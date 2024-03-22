import "./App.css"

import { Card } from "./components/Card";

function App() {
  return ( <div className="d-card"> 
  <div className="App">
    <Card 
    imgSrc="https://picsum.photos/id/28/367/267" 
    imgAlt="card-img" 
    title="Card title"
    description="This is the card description. You can add more about details here."
    buttonText="Click me"
    link="cardPage"/>
  </div><div className="App">
    <Card 
    imgSrc="https://picsum.photos/id/16/367/267" 
    imgAlt="card-img" 
    title="Card title"
    description="This is the card description. You can add more about details here."
    buttonText="Click me"
    link="cardPage"/>
  </div> <div className="c-card">
    <Card 
    imgSrc="https://picsum.photos/id/237/536/354" 
    imgAlt="card-img" 
    title="Card title"
    description="This is the card description. You can add more about details here."
    buttonText="Click me"
    link="cardPage"/>
  </div>
  
  </div>);
}

export default App;