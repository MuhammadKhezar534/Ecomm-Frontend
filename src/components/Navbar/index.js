import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const CNavbar =()=> {

  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  let navigate=useNavigate()


 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://weary-toad-getup.cyclic.app/category'); 
        const result = await response.json();

        setData(result);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const handleNavigate=(id,name)=>{
    console.log({id})
    navigate(`/products/${id}/${name}`)
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={()=>navigate("/")}>Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate("/")}>Home</Nav.Link>
           {
            data?.map(dat=>(
            <Nav.Link onClick={()=>handleNavigate(dat?._id,dat?.name)} key={dat?._id}>{dat?.name}</Nav.Link>
            ))
           }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CNavbar;