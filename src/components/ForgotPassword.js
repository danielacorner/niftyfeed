import React, { useState, useRef } from 'react';
import { Modal, ModalBody, Button } from 'reactstrap';
import { Card, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import Account from './needAccount';

const ForgotPassword = () => {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const { resetPassword } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault()

            try {
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(usernameRef.current.value, emailRef.current.value)
            setMessage('Check your inbox for further instructions')
          } catch {
            setError("Failed to reset password")
        }
       setLoading(false) 
    }
    
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return (  
        <div>
            <Link onClick={setModalIsOpenToTrue} className="login">Forgot Password</Link>
                <Modal isOpen={modalIsOpen} toggle={setModalIsOpenToFalse}>
                    <Card>
                        <Card.Body>
                            <div>
                                <h1 className="login-header">Reset Password</h1>
                                {error && <Alert variant="danger">{error}</Alert>}        
                                {message && <Alert variant="success">{message}</Alert>}   
                            </div>
                            <ModalBody>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <div className="form-group">
                                            <Form.Control type="username" ref={usernameRef} placeholder='Username' required />
                                        </div>
                                    </Form.Group>
                                    <div className='logreg-div'>
                                        <Form.Group>
                                            <div className="form-group">
                                                <Form.Control type="password" ref={passwordRef} placeholder='New Password' required />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className='logreg-div'>
                                            <Form.Group>
                                                <div className="form-group">
                                                    <Form.Control type="password" ref={passwordConfirmRef} placeholder='Re-enter password' required />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    <div>
                                        <Button type="submit" className="submit" disabled={loading} onSubmit={handleSubmit}>
                                             Submit
                                        </Button>
                                    </div>
                                </Form>
                                <div className='logreg-footnote'>
                                    <div>
                                      <Account />
                                    </div>
                                </div>
                            </ModalBody>
                        </Card.Body>
                    </Card>
                </Modal> 
        </div> 
    )
 }

export default ForgotPassword;