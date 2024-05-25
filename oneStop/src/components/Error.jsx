import React from 'react'
import { useRouteError } from 'react-router-dom';

function Error() {
    const error = useRouteError();
    console.error("hi",error);
    return <div className="flex flex-col items-center space-y-4">
      <div role="alert" className="alert alert-error flex justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span className="text-center">Error! {error.status} {error.statusText}</span>
</div>
<div role="alert" className="alert alert-info h-96 w-96 text-center ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>{error.data}</span>
</div>
    </div>;
  }



export default Error;
