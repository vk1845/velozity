import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Velocity from './components/velocity';


function App() {
 // const { data, loading, error } = useQuery(query);


 axios.request({
  method: 'get',
  url: 'https//api.graphql.jobs/',
  headers: {
    'Content-Type': 'application/json'
  }
})


 const data = [{title:"Software tech Company", company:"Velozity", city:"Bangalore", country:"India", remote:"Yes/No"},
 {title:"Software tech Comapny", company:"Velozity", city:"Chennai", country:"india", remote:"Yes/No"},
 {title:"Software tech Company", company:"Velozity", city:"TamilNadu", country:"India", remote:"Yes/No"},
 {title:"Software tech Company", company:"Velozity", city:"Hyderbad", country:"India", remote:"Yes/No"}];
  return (
  
     <div className="app">
    <Navbar/>
    <div className="navelocity">
      <Velocity data={data}/>
    </div>
   </div>
    
  )
}
export default App;