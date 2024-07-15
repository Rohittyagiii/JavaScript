let userData=[];
function callApi(id){
    console.log("hii i'm inside method");
    fetch("https://jsonplaceholder.typicode.com/users/"+id)
    .then(rohit => rohit.json()
).then(json => console.log("here is my Data",json))
}

