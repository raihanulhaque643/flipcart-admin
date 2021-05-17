import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { login } from '../../actions';
import { useDispatch } from 'react-redux';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }

        dispatch(login(user));
    }

    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{marginTop: '50px'}}>
                        <Col md={{span: 6, offset: 3}}>
                            <Form onSubmit={userLogin}>
                                <Input 
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="text"
                                onChange={(e) => {setEmail(e.target.value)}}
                                />

                                <Input 
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => {setPassword(e.target.value)}}
                                />

                                <Button variant="primary" type="submit">
                                    Signin
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}

export default Signin
