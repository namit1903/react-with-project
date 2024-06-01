import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetSingleProduct from '../hook/useGetSingleProduct';

const ProductDetail = () => {
let {id}=useParams();
let obj=useGetSingleProduct()
if(obj==null){return};
let {title,price,description,image,rating}=obj;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={`${image}`} alt="product"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <p>{description}</p>
    <p>{rating.rate}</p>
    <p>{rating.count}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  )
}

export default ProductDetail
