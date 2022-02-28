import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Rate from "@/components/Rate";
import axios from "axios"
import Head from "next/head";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa"
import styles from "styles/ProductPage.module.scss";


export default function ProductPage({ data }) {
    let { title, image, category, price, description, rating } = data;

    return <Fragment>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>

        <Layout>
            <Row className="justify-content-center">
                <Col md={8} lg={12}>
                    <div className={`${styles.product} p-5`}>
                        <Row>
                            <Col lg={4}>
                                <div className="p-3">
                                    <img className="d-block w-100" src={image} alt={title} />
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="ps-5">
                                    <Row>
                                        <Col lg={7} xl={8}>
                                            <div>
                                                <h1 className={`${styles.product_title} text-uppercase`}><strong>{title}</strong></h1>
                                                <div className={`${styles.product_category} text-uppercase fw-bold fst-italic`}>{category}</div>
                                                <span className={`${styles.product_price} fw-bold`}>${price}</span>
                                            </div>
                                        </Col>
                                        <Col lg={5} xl={4}>
                                            <div className="mt-1 mt-lg-0">
                                                <Rate value={rating.rate} allowHalf style={{ fontSize: 30 }} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className={`${styles.product_description} mt-5`}>
                                                <h3 className={`${styles.product_title} text-uppercase fw-bold`}>Description</h3>
                                                <p className="fw-">{description}</p>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <div className="mt-4">
                                                <Button>
                                                    <div className="d-flex align-items-center">
                                                        <FaShoppingCart className="me-2" size="1.5rem" />
                                                        <span>ADD TO CART</span>
                                                    </div>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Layout>

    </Fragment>
}

export async function getServerSideProps(props) {
    let { id } = props.query

    let res = await axios.get(`https://fakestoreapi.com/products/${id}`)


    return {
        props: {
            data: res.data
        }
    }
}