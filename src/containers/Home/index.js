import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

const Home = () => {
    return (
        <div>
            <Layout>
                <Jumbotron style={{margin: '5rem', background: 'white'}} className="text-center">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus, ullam ducimus voluptate magni vel, fugiat mollitia dolorem qui obcaecati quisquam est excepturi fugit laboriosam enim maiores distinctio autem inventore, commodi officiis quo sapiente corrupti. Impedit molestias commodi reprehenderit nam?</p>
                </Jumbotron>
            </Layout>
        </div>
    )
}

export default Home
