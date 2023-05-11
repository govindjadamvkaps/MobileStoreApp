import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap';
import { useParams } from 'react-router'
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router';
import { TfiCommentAlt } from "react-icons/tfi";
// import { fetchAdmin } from '../../../../MobileStorebackend/src/controllers/MobileController';

const ViewProduct = () => {
  const[data,setData]=useState([])
  const [rate,setRate] =useState([])
  const [user, setUser]= useState([])
  
  // const[checkLogin,setCheckLogin] = useState(null)
  // const token = localStorage.getItem("token")

  // if(token && !checkLogin)
  // {
  //   setCheckLogin(token)
  // }

  const _id = localStorage.getItem('_id')
  // console.log(!token)
  const {id} = useParams()
  const history = useNavigate()
  // alert(id)

  

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:7000/mobiles/${id}`);
    setData(res.data);
    setRate(res.data.ratingId)
    // console.log(res.data.ratingId  )
  };

  // console.log(_id)
  // const fetchAdmin = async()=>{
  //   const admin = await axios.get(`http://localhost:7000/admins/${_id}`)
  //   // console.log(admin.data)
  //   setUser(admin.data)

  // }

  useEffect(() => {
    fetchData();
    // fetchAdmin();
  }, []);

  const handleClick = ()=>{
    alert("Please Login First")
    history("/")
  }

  return (
    <>
  <Container className='mt-5'> 
   <Row>
    <Col lg={5}>
      <div className='offset-md-3'>
        <img  src={data.mobileImg}/>
      </div>
      <div className='mt-3 offset-md-3'>
      <Button variant="warning" className='mt-2'><BsFillCartPlusFill/>{" "}ADD TO CART</Button>{' '}
      <Button variant="primary" className='mt-2'>BUY NOW</Button>
      </div>
      <div></div>
    </Col>
    <Col lg={7}>
      <h2>{data.mobileName}</h2>
      <Button variant="success">{data.star}<AiTwotoneStar/></Button>
      <h3 className='mt-4'> &#8377; { data.price}</h3>
      <h4>Highlights :</h4><p>{data.highlights}</p>
      <p className="mt-3"><b>Description :</b></p><br/>
      <p>{data.description}</p>

      <div className='d-flex justify-content-around'>
      <h2 className='mt-3'>Ratings & Reviews</h2>
      <div className='mt-3'>
        

       
        {/* <NavLink to="/comments">
      <Button variant="secondary" onClick={()=>{history(`/comments/${data._id}`)}}>Rate Product </Button>{' '}

        </NavLink> */}
       {
        localStorage.getItem("token")? <NavLink to="/comments">
        <Button variant="secondary" onClick={()=>{history(`/comments/${data._id}`)}}>Rate Product </Button>{' '}
        {/* <Button variant="secondary" onClick={handleClick}>Rate Product </Button>{' '} */}
          </NavLink> 
          :<Button variant="secondary" onClick={handleClick}>Rate Product </Button>
       }

       

      </div>

      </div>
     
  {    
    rate.map((curVal,index)=>{
      // console.log(rate.length)
     
      return(
        <>
        <Container>
          <div className="mt-3">
         
          <h3>{index+1}. { ' '}{curVal.adminId.fname}</h3>
         <Button variant="success" > {curVal.rating}<AiTwotoneStar/></Button>
          <br/>
          <p><TfiCommentAlt /> {curVal.comments}</p>
          
          </div> <hr/>
        </Container>
        </>
      )
    
    })
  
}
  </Col>
   </Row>

  </Container>
 
  </>
  
  )
}

export default ViewProduct