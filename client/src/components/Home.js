import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Container, Col, Row, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { AiTwotoneStar } from "react-icons/ai";
const Home = () => {
  const history = useNavigate()
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:7000/mobiles");
    // console.log(res)
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleClick= (id)=>{
  //   alert(id)
  //   // history("/views")
  // }

  return (
    <>
      <Container>
        <Row>
          {data.map((curItem) => {
            return (
              <Col lg={4} className="mt-4">
                <div className="card" style={{width: "18rem"}}>
                  <img src={curItem.mobileImg} height="500px" width="50px" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">{curItem.mobileName}</h4>
                    <h5 className="card-title">Price &#8377;{curItem.price}</h5>
                    <p className="card-text"><b>Description:</b><br/> 
                    {(curItem.description).split(" ", 25).join(" ")}
                    </p>

                    {/* <p class="card-text"><b>Rating:</b><br/>
                    {curItem.star}
                    </p> */}
                    <Button variant="success">{curItem.star}<AiTwotoneStar/></Button>
                    
                    <NavLink to="/views" onClick={()=>{history(`/views/${curItem._id}`)}} class="card-link">Read more</NavLink>
                    
                   </div> 
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
