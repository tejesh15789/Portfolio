import { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';

function FormExample() {
    const form = useRef();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            emailjs
                .sendForm('service_8bsav0p', 'template_wc0mgoz', form, 'ZXYG_H3ro0foGcK9Z')
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setValidated(true);
                        
                        alert('Your form has been sent successfully');
                        
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        }
    };

    return (
        <section className='form-back'>
        <section className='fromsetup mb-4 '>
            <Row>
                <h1 className='d-flex justify-content-center py-4'>Contact Form</h1>
            </Row>
        <Container >
            <Form noValidate validated={validated} onSubmit={handleSubmit} ref={form} >
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name='from_name'
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
               
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                name="from_email"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} md="4" controlId="validationFormikPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="tel"
                                placeholder="Phone Number"
                                pattern="^\d{10}$"
                                name='from_phone'
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number (10 digits).
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Message" name='from_message' required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Button type="submit">Submit form</Button>
            </Form>
         
            
        </Container>
        </section>
        </section>
    );
}

export default FormExample;
