import React from 'react';
import PropTypes from "prop-types";

function Potato({ fav,picture,rating }) {
  return <div><h1>I like {fav}</h1>
  <h2>Rating: {rating}/5.0</h2>
  <img src={picture} alt={fav}></img></div>;
}

const foodILike = [{ id:1,rating:4.5,name: "kimchi", image: "https://static.wixstatic.com/media/d6acfa_09250b1dbbee48d3a2681aef024604ae~mv2_d_1770_1417_s_2.jpg/v1/fill/w_500,h_400,al_c,q_85,usm_0.66_1.00_0.01/d6acfa_09250b1dbbee48d3a2681aef024604ae~mv2_d_1770_1417_s_2.webp" },
{ id:2,rating:4.1,name: "pork", image: "https://ae01.alicdn.com/kf/HTB1lDOShxrI8KJjy0Fpq6z5hVXan/Wild-2018-Sexy-Micro-Bikini-Set-Beach-Sunbathing-Swim-Costumes-Lingeries-For-Women-Teeny-Swimwear-Female.jpg_640x640.jpg" }];

Potato.propTypes={
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return <div><h1>Hello!</h1>
  {foodILike.map(dish => <Potato key={dish.id} fav={dish.name} picture={dish.image} rating={dish.rating}/>)}
  </div>;
}

export default App;