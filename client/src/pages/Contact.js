import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// make sure the link is updated each time anything in the form changes so no double click is required
const handleChange = (event) => {
    event.preventDefault();

    let sub = document.getElementById("subject").value;
    let body = document.getElementById("body").value;
    let subW = sub.split(' ');
    let bodyW = body.split(' ');
    
    let nextS;
    let nextB;

    if (subW.length >= 2){
        nextS = sub.replace(/ /g, '%20');
    } else {
        nextS = sub;
    }

    if (bodyW.length >=2) {
        nextB = body.replace(/ /g, '%20');
    } else {
        nextB = body;
    }

    if (sub && body) {
        document.getElementById('aTag').href = "mailto:thetmcgfund@gmail.com?subject=" + nextS + "&body=" + nextB;
    } else if (sub) {
        document.getElementById('aTag').href = "mailto:thetmcgfund@gmail.com?subject=" + nextS;
    } else if (body) {
        document.getElementById('aTag').href = "mailto:thetmcgfund@gmail.com?body=" + nextB;
    };
};

// handle contact form submit to open prepopulated email from default app
const handleFormSubmit = (event) => {
    event.preventDefault();

    let sub = document.getElementById("subject").value;
    let body = document.getElementById("body").value;
    let subW = sub.split(' ');
    let bodyW = body.split(' ');
    
    let nextS;
    let nextB;

    if (subW.length >= 2){
        nextS = sub.replace(/ /g, '%20');
    } else {
        nextS = sub;
    }
    console.log(nextS);
    if (bodyW.length >=2) {
        nextB = body.replace(/ /g, '%20');
    } else {
        nextB = body;
    }
    console.log(nextB);

    if (sub && body) {
        document.getElementById('aTag').href = "mailto:thetmcgfund@gmail.com?subject=" + nextS + "&body=" + nextB;
    } else if (sub) {
        document.getElementById('aTag').href = "mailto:thetmcgfund@gmail.com?subject=" + nextS;
    } else if (body) {
        document.getElementById('aTag').href = "mailto:thetmcgfund@gmail.com?body=" + nextB;
    };
};


const Contact = () => {

    return (
        <div id="quick">
            <h1>Send Us an Email by Filling out this Form:</h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="Subject.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control onChange={handleChange} id="subject" size="lg" type="subject" placeholder="Your subject here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Body.ControlTextarea1">
                    <Form.Label>Body</Form.Label>
                    <Form.Control onChange={handleChange} id="body" placeholder="Your message here" as="textarea" rows={3} />
                </Form.Group>
                <Button id="buttonColor" type="submit">
                    <a id="aTag"
                        target="_top">
                        Send mail!
                    </a>
                </Button>
                <br></br>
                <br></br>
            </Form>
        </div>
    );
};

export default Contact;
