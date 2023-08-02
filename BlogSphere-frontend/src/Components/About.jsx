import React from 'react'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import Accordion from './Accordion'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <div className="accordion">
                <Accordion />
            </div>
            <div className=" p-5">
                <p>For any queries, concerns, or assistance, you can reach out to our support team through the <Link to='/contactus'>"Contact Us"</Link> section or via email. We are here to help and ensure you have a pleasant experience on BlogSphere.</p>
            </div>
            <div className="fixed-bottom">
                <Footer />
            </div>

        </div>
    )
}

export default About
