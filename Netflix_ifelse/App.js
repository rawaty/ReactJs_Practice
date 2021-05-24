import React from 'react';
import Card from "./Cards";
import Netflix from './Netflix';
import Sdata from "./Sdata";
import Amazon from './Amazon';

const favSeries='netflix';
const FavS=()=>{
if(favSeries=='netflix')
{
   return <Netflix/>;
}else
{
    return(
       <Amazon/>)
}
};
const App=()=>(
    <>
   <h1 className="heading_style">Top 4 Netflix series..</h1>);
     <FavS/>
    </>
);
export default App;