import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../../components/Product';
import Layout from '../Layout';
import { Container, Row, Col } from 'react-bootstrap';


const filterData = (id, data) => {
  return data?.filter(data => data?.categoryId === id)
}

const Products = () => {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  const { id ,name=""} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://weary-toad-getup.cyclic.app/product');
        const result = await response.json();

        setData(result);
        //   setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        //   setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div >
      <Layout>
        <Container style={{padding:"0px 20px 90px 20px"}}>
      <div className='m-head' style={{marginTop:"30px", fontSize:"30px", color:"#000", fontWeight:"600"}}>{name}</div>
          <Row>
            {filterData(id, data)?.map(dat => (
              <Col key={dat?._id} xs={6} md={3} lg={3}>
                <Product {...dat} />
              </Col>
            ))
            }
          </Row>
        </Container>
      </Layout>
    </div>

  );
}

export default Products;