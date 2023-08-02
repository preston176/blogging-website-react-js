import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        email: '',
        details: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://your-server-url.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            // Handle successful response (e.g., show success message)
            alert('Message sent successfully!');
            // Clear the form after successful submission
            setFormData({
                email: '',
                details: '',
            });
        } catch (error) {
            // Handle error (e.g., show error message)
            alert('Error sending message. Please try again later.');
        }
    };

    return (
        <div className="py-5">
            <Container>
                <p>
                    Welcome to our Contact Us page! If you have any questions, suggestions, or feedback, we'd love to hear from you.
                    Our team is dedicated to providing the best possible experience for our users, and your input is invaluable in helping us improve.
                    Please feel free to fill out the form below with your details and message. We'll get back to you as soon as possible.
                    Thank you for being a part of our community at BlogSphere. We appreciate your support and look forward to connecting with you!
                </p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Details</Form.Label>
                        <Form.Control as="textarea" name="details" rows={3} value={formData.details} onChange={handleInputChange} />
                    </Form.Group>
                    <button type="submit" className="btn btn-secondary">
                        Send Message
                    </button>
                </Form>
            </Container>
        </div>
    );
};

export default ContactUs;
