import React from 'react';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { login } from '../../actions';
import { useDispatch } from 'react-redux';

const Signin = () => {

    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email: 'raihannn@gmail.com',
            password: '123456'
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
                                value=""
                                type="text"
                                onChange={() => {}}
                                />

                                <Input 
                                label="Password"
                                placeholder="Password"
                                value=""
                                type="text"
                                onChange={() => {}}
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
