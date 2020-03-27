import React, {useState} from 'react';
import axios from 'axios';

const App = ()=>{
  const [data,setData] =useState(null);
  const onClick=async ()=>{
    try{
      const response = await axios.get(
    'http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=f4266e8ad53f47aea9baad9a404e8859'
    );
      setData(response.data);
    } catch(e){
      console.log(e);
    }
  };
  
  return(
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
    </div>
  );
};

export default App;