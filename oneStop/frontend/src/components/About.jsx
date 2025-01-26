import React from 'react';

import PhoneNumberUpdate from './PhoneNumberUpdate';
import { useGetUserQuery } from '../Utility/authApi';

const About = () => {

  let {data , isError , isLoading } = useGetUserQuery();
if(!data) return <h1> Not available</h1>
if(isLoading){
  return <span className="loading loading-dots loading-lg"></span>
}
 
  return (
    <div className='bg-white text-black h-screen flex justify-center items-center'>
     <table className='border-2 border-red  w-1/2 h-1/2'>
      <tr  className='border-2 border-red  text-2xl px-auto '>
        <td>userName</td>
        <td>{data.data.userName}</td>
      </tr>
      <tr className='border-2 border-red text-2xl p-4 '>
        <td>Email</td>
        <td>{data.data.email} </td>
      </tr>
      <tr className='border-2 border-red  text-2xl px-auto '>
        <td>PhoneNumber</td>
        <td>{data?.data?.phoneNumber || "NA "} <PhoneNumberUpdate></PhoneNumberUpdate> </td>
      </tr>
     </table>
    </div>
  )
}

export default About