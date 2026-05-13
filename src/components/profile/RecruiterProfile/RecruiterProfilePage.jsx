import Header from "./header.jsx"
import RecruiterStatsCard from "./RecruiterStatsCard.jsx"

export default function RecruiterProfilePage() {
  return (
    <>
     
    
       <div className="par" >

        <div style={{height:"25vh"}}>
          <Header/>
        </div>


        <div style={{height:"maxContent",display:"flex",padding:10}}>

          <div style={{display:"flex",flexDirection:"column",alignItems:"end",width:"50%"}}>
          

          </div>



          <div style={{
            width:"50%"}}>

 <RecruiterStatsCard/>
            
          </div>
        </div>

       </div>






    </>
  );
}