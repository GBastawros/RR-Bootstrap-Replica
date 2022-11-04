import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

function Background() {
  return (
    <>
    <Card style={{ width: "1300px", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
      <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" 
                alt="Card image"
                style={{width: "%", height:"270px"}}
      />
      <Card.ImgOverlay>
        <Card.Text>
          <h1 style={{textAlign: "center"}}>Order groceries for delivery or pickup today</h1>
        </Card.Text>
      </Card.ImgOverlay>
    
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control size="lg" type="text" placeholder="Enter your address" />
      </Form.Group>
    </Form>
    </Card>
    </>
  );
}

export default Background