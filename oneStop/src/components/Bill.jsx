export default function Bill({cart}){
  let sum=0;
  cart.map(item=>(
    sum=sum+item.price
  ))
  return(
    <>
   <div className="bill">
   <div className="artboard phone-2 bg-slate-800">
    <div>TotalItems={cart.length}</div>
    <div>Total amount= {sum}</div>
   </div>
   </div>
    </>
  )
}