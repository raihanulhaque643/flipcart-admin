import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import './style.css';

const Home = () => {
  return (
    <div>
      <Layout>
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">Sidebar</Col>
            <Col md={10} style={{marginLeft: 'auto'}} >Container</Col>
          </Row>
        </Container>
        {/* <Jumbotron style={{margin: '5rem', background: 'white'}} className="text-center">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus, ullam ducimus voluptate magni vel, fugiat mollitia dolorem qui obcaecati quisquam est excepturi fugit laboriosam enim maiores distinctio autem inventore, commodi officiis quo sapiente corrupti. Impedit molestias commodi reprehenderit nam?</p>
                </Jumbotron> */}
      </Layout>
    </div>
  );
};

export default Home;
