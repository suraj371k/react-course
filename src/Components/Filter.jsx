

const Filter = (props) =>{
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }
    return(
        <div className="flex justify-center gap-5 text-2xl py-2">
            {
                filterData.map((data)=>(
                  <button className="bg-blue-800 border-2 border-solid border-gray-600 hover:bg-blue-950 p-2 rounded-lg text-white" key={data.id} onClick={() => filterHandler(data.title)}>{data.title}</button>
                ))
            }
        </div>
    )
}

export default Filter