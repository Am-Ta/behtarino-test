import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import axios from "axios"
import Head from "next/head";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";


export default function ListProductPage({ data }) {
    return <Fragment>
        <Head>
            <title>Products</title>
            <meta name="description" content="List of products" />
        </Head>

        <Layout>
            <Row>
                {data.map(item => {
                    return <Col sm={6} md={4} lg={3} key={item.id}>
                        <ProductCard title={item.title} src={item.image} id={item.id} />
                    </Col>
                })}
            </Row>
        </Layout>
    </Fragment>

}

export async function getServerSideProps(props) {
    let res = await axios.get("https://fakestoreapi.com/products")

    return {
        props: {
            data: res.data
        }
    }
}