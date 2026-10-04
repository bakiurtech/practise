const fetchData = async () => {
    let response;

    try{
        response = await fetch("https://jsonplaceholder.typicode.com/posts");
    }catch(err){
        throw new Error(err.message);
    }

    if(!response.ok) throw new Error("failed to load the posts");

    const data = await response.json();
    console.log(data);
}


fetchData();