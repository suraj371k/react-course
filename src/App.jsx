import './App.css'
import Navbar from './Components/Navbar'
import { filterData, apiUrl} from './Components/data'
import Filter from './Components/Filter'
import { useEffect, useState } from 'react'
import Spinner from './Components/Spinner'
import Cards from './Components/Cards'

function App() {
const [courses , setCourses] = useState(null)
const [loading , setLoading] = useState(true)
const [category , setCategory] = useState(filterData[0].title);

async function fetchData(){
  setLoading(true)
  try{
    let response = await fetch(apiUrl);
let output = await response.json();
setCourses(output.data)
  }
  catch(error){
   toast.error("Network Problem");
  }
  setLoading(false)
}
useEffect(() =>{
  fetchData();
},[])
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center 
      min-h-[50vh]'>
      {loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)}
      </div>
    </div>
  )
}

export default App
