import React, { useState, useRef } from 'react';
import { Modal, ModalBody} from 'reactstrap';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory  } from 'react-router-dom'

const Registration = () => {

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // const nameRef = useRef();
    // const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const history = useHistory();

    const { signup } = useAuth();


    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !==
            passwordConfirmRef.current.value) {
                return setError("Passwords do not match")
            }

           try {
                setError("")
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)
                history.push("/dashboard")
            } 
            catch {
                console.error('caught it', e);
                setError("Failed to create an account")
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
        <>
            <Button onClick={setModalIsOpenToTrue} className="registration">New Account</Button>
                <Modal isOpen={modalIsOpen} toggle={setModalIsOpenToFalse}>
                    <Card>
                        <Card.Body>
                             <div>
                                <h1 className="new-account">New Account</h1>
                                {error && <Alert variant="danger">{error}</Alert>}
                            </div>
                                <ModalBody>
                                    <Form onClick={handleSubmit}>
                                        <Form.Group>
                                            <div className="form-name">
                                                <Form.Control type="name" placeholder='Name (first, last)' required />
                                            </div>
                                        </Form.Group>
                                        <div className='logreg-div'>
                                            <Form.Group>
                                                <div className="form-group">
                                                    <Form.Control type="email" ref={emailRef} placeholder='Email' required />
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className='logreg-div'>
                                            <Form.Group>
                                                <div className="form-group">
                                                    <Form.Control type="username" placeholder='Username' required />
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className='logreg-div'>
                                            <Form.Group>
                                                <div className="form-group">
                                                    <Form.Control type="password" ref={passwordRef} placeholder='Password' required />
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
                                                <Button type="submit" className="submit" disabled={loading}>
                                                    Submit
                                                </Button>
                                            </div>
                                            <div className='logreg-footnote'>
                                                <div>
                                                    Forgot password
                                                </div>
                                                <div>
                                                    Already have an account? <Link to="/Login">Log In</Link>
                                                </div>                                    
                                            </div>
                                    </Form>
                                </ModalBody>
                            </Card.Body>
                        </Card>
                 </Modal>  
             </> 
         )
    }
export default Registration;  