import axios from "axios";
import React, { useState } from "react";
import { Container, Dropdown, Form } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const RatingReview = () => {
  const history = useNavigate()
  const { id } = useParams();
//   console.log(id)
console.log(localStorage.getItem("_id"))
  const [comment, setComment] = useState({
    rating: "",
    comments: "",
    mobileId: id,
    adminId: localStorage.getItem("_id")
  });
  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
    //   console.log(comment.rating, comment.comments, comment.mobileId)
    const resp = await axios.post("http://localhost:7000/ratings", comment);
    console.log(resp);
    // console.log(comment)
    setComment({rating:"Rate",comments:""})
    if(resp.data.success){
      // alert(res)
      alert("comment Successful");
      history(`/views/${id}`)

    }
    else{
      alert(resp.data.message)
      history(`/views/${id}`)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <div>
            <div>
              <h3 className="mt-4">
                <BsStarFill /> Rate the product
              </h3>
            </div>
            <div className="mt-5">
              <Container>
                <Form.Select aria-label="Default select example" name="rating" onChange={handleChange}>
                  <option>Rate</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Container>
            </div>
          </div>
        </Container>

        <Container className="mt-4">
          <div>
            <div>
              <h3>
                <TfiCommentAlt /> Review this product
              </h3>
            </div>
            <div>
              <div className="input-group mt-4">
                <textarea
                  className="form-control"
                  value={comment.comments}
                  aria-label="With textarea"
                  name="comments"
                  placeholder="comments"
                  rows="8"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-warning mt-3" >
            Submit
          </button>
        </Container>
      </form>
    </>
  );
};

export default RatingReview;
