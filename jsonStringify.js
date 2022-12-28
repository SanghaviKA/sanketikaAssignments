let employees = [{"id":1,"first_name":"Wenda","last_name":"Fison","email":"wfison0@unesco.org","gender":"Agender","ip_address":"136.133.97.110"},
{"id":2,"first_name":"Selig","last_name":"Telling","email":"stelling1@sciencedaily.com","gender":"Male","ip_address":"240.62.37.1"},
{"id":3,"first_name":"Kalina","last_name":"Hargreaves","email":"khargreaves2@google.com.au","gender":"Female","ip_address":"239.255.10.31"},
{"id":4,"first_name":"Jerry","last_name":"Gordge","email":"jgordge3@gmpg.org","gender":"Female","ip_address":"216.22.33.120"},
{"id":5,"first_name":"Galen","last_name":"Myford","email":"gmyford4@dion.ne.jp","gender":"Genderqueer","ip_address":"94.67.198.92"},
{"id":6,"first_name":"Shaylyn","last_name":"Howorth","email":"showorth5@nifty.com","gender":"Female","ip_address":"12.17.174.250"},
{"id":7,"first_name":"Alastair","last_name":"Whellans","email":"awhellans6@army.mil","gender":"Polygender","ip_address":"124.154.10.240"},
{"id":8,"first_name":"Aurel","last_name":"Medley","email":"amedley7@odnoklassniki.ru","gender":"Female","ip_address":"223.42.32.1"},
{"id":9,"first_name":"Correy","last_name":"Snellman","email":"csnellman8@pinterest.com","gender":"Male","ip_address":"53.142.137.194"},
{"id":10,"first_name":"Emmy","last_name":"Brimm","email":"ebrimm9@istockphoto.com","gender":"Male","ip_address":"41.43.4.61"}]



var fs = require('fs');
fs.writeFile('employee.txt', JSON.stringify(employees), function (err) {
     if (err) throw err;
     console.log('Saved!');
   });
   
   fs.readFile('employee.txt',function(err,data){
    if(err)throw err;
    let employee= JSON.parse(data);
  console.log(employee);
   });


