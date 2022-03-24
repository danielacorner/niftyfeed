import React, { useState, useRef } from 'react';
import { Button } from 'reactstrap';
import { Card, Form, Alert } from 'react-bootstrap';
import { Link, useHistory  } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import Account from './needAccount';

const Login = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const usernameRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault()

            try {
            setError("")
            setLoading(true)
            await login(usernameRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
          } catch {
            setError("Failed to sign in")
        }
       setLoading(false) 
    }

    const handleGoToForgotPassword = () => {
        history.push("/forgotpassword")
    }

    return (  
        <div>
            <Card className="login-card">
                <Card.Body>
                    <div>
                        <h1 className="login-header">Log In</h1>
                        {error && <Alert variant="danger">{error}</Alert>}           
                    </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <div className="form-group">
                                    <Form.Control type="username" ref={usernameRef} placeholder='Username' required />
                                </div>
                            </Form.Group>
                            <div className='logreg-div'>
                                <Form.Group>
                                    <div className="form-group">
                                        <Form.Control type="password" ref={passwordRef} placeholder='Password' required />
                                    </div>
                                </Form.Group>
                            </div>
                            <div>
                                <Button type="submit" className="submit" disabled={loading}>
                                        Submit
                                </Button>
                            </div>
                        </Form>
                        <div className='logreg-footnote'>
                            <div>
                                <Link onClick={handleGoToForgotPassword}>Forgot password</Link>
                            </div>
                            <div>
                               <Account/>
                            </div>
                        </div>
                </Card.Body>
            </Card>
        </div> 
    )
 }


export default Login;  