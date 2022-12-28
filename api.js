var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send();
request.onload = ()=>{
    console.log(JSON.parse(request.response));
}