import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

export default function Accordion() {

    return (
        <MDBAccordion initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle='What is BlogSphere'>
                <strong>It is a (free-for-all) blogging platform.</strong> Explore an array of intriguing topics, from the latest trends in technology, politics, and sports to insightful pieces on lifestyle, travel, and culture. Immerse yourself in the world of knowledge, creativity, and inspiration as you discover the finest collection of blogs curated just for you.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={2} headerTitle='How can I create a blog on BlogSphere?'>
                <strong>To create a blog on BlogSphere,</strong>navigate to the  <code>"Write a Blog"
                </code>
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={3} headerTitle='Is BlogSphere free to use?'>
                <strong>Yes, BlogSphere is free for both writers and readers.</strong> You can create an account, write blogs, and read content without any subscription or membership fees
            </MDBAccordionItem>
        </MDBAccordion>
    );
}