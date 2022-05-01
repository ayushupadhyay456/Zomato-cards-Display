import React,{useEffect, useState} from 'react'
import "./style.css";
import Fooddata from './FoodData'
import Cards from './Cards';
import Set from './Set';


const Search = () => {

    const [Fdata,setFdata]=useState(Fooddata)
    console.log(Fdata)

    const[copydata,setcopydata]=useState([]);


    const changedata=(e)=>{
        let getchangedata=e.toLowerCase();
        if (getchangedata==""){
            setcopydata(Fdata)
        }else{
            let storedata=copydata.filter((ele,k)=>{
              return  ele.rname.toLowerCase().match(getchangedata);
            });
            setcopydata(storedata)
        }
    }

    const zomatologo="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"

    useEffect(()=>
    {
        setTimeout(()=>{
            setcopydata(Fooddata);
        },3000)
        
    },[])
  return (
    <>
        <div className="container d-flex justify-content-between align-items-center">
            <img src={zomatologo} style={{width:"8rem",position:"relative",left:"2%",cursor:"pointer"}} alt=""/>
            <h2>Search Filter App</h2>
        </div>

        <form className="d-flex justify-content-center align-items-center">
            <input type="text" style={{width:"30%"}} onChange={(e)=>changedata(e.target.value)} placeholder="Search Restaurants"/>
            <button className="btn text-light col-lg-1" style={{background:"#E23744",marginLeft:"5px"}}>Search</button>
        </form>
        <section className="item_section mt-4 container">
            <h2>Restaurants Open in Lucknow</h2>
        <div className='row mt-2 d-flex justify-content-around align-items-center'>
         {copydata && copydata.length ?   <Cards  data={copydata}/>:<Set  sdata={Fdata} />}

           
        </div>

        
        

        </section>
        
        
        
    </>
  )
}

export default Search
