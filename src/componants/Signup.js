import React, { useState } from "react";
import "../styles/Signup.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";

export default function Signup() {
    return (
        
        <Container id="sucon">
            <Card>
                <Card.Header as="h1" id="header">Join Us !</Card.Header>
                <Card.Body>
                    <Form>
                        <div className="row">
                            <div className="col-lg-6">
                                <Card.Text as="h5">Name</Card.Text>
                                <input className="form-control" name="name" placeholder="Enter your name"></input>
                            </div>
                            <div className="col-lg-6">
                                <Card.Text as="h5">First Name</Card.Text>
                                <input className="form-control" name="surname" placeholder="Enter your first name"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Card.Text as="h5">Username</Card.Text>
                                <input className="form-control" name="pseudo" placeholder="Enter your username"></input>
                            </div>
                            <div className="col-lg-6">
                                <Card.Text as="h5">Password</Card.Text>
                                <input className="form-control" name="password" placeholder="Enter your password"></input>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}