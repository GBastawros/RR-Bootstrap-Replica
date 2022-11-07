import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

function Background() {
    return (
        <>
            <Card style={{ width: "1300px", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
                <Card.Img style={{ height: "100%", width: "50%", position: "absolute"}}
                    src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
                    alt="Card image"
                />
                <Card.ImgOverlay style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px" }}>
                    <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                        Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1em" }}>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control size="lg" type="text" placeholder="Enter your address" />
                    </Form.Group>
                </Form>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}

export default Background