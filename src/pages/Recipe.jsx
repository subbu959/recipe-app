import { useEffect,useState } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import React from 'react';


function Recipe() {
    let params = useParams();
    const [details,setDetails] = useState({});
    const [activeTab,setActiveTab] = useState("Instructions");
    const fetchDetails = async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };
    useEffect(()=>{
        fetchDetails();
    },[params.name]);

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="details.title"/>
        </div>
        <Info>
            <Button 
            className={activeTab ==="Instructions"?"active":''}
            onClick={()=> setActiveTab("Instructions")}
            >
                Instructions
            </Button>
            <Button
                className={activeTab ==="Ingredients"?"active":''}
                onClick={()=> setActiveTab("Ingredients")}
                
            >Ingredients</Button>
            {activeTab === 'Instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
                </div>
            )}
            {activeTab === 'Ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient) => (
                        <li kry={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>

            )}

        </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
    margin-top:10rem;
    margin-bottom:5rem;
    display:flex;
    .active{
        background: linear-gradient(35deg,#494949,#313131);
        color:white;
    }
    h3{font-size:15px;
        margin-botton:2rem;
        font-weight:600;
        line-height:1.7rem;
    }
    li{
       font-size:20px;
       line-height:2.5rem;
      
    }
    ul{
        margin-top:2rem;
    }
`

const Button = styled.button`
    padding:1rem 2rem;
    color:#313131;
    background:white;
    border:2px solid black;
    margin-right:2rem;
    font-weight:600;
`
const Info = styled.div`
    margin-left:10rem
`
export default Recipe;