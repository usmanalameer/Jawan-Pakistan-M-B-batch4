const data = {
       code: 101,
         items:[{
         id:1,
         name:"usman",
         schoolName:"BFS"
      },{
         id:2,
         name:"hasan",
         schoolName:"BFS"
      }]
}

const print = data['items'][1]['name']
console.log(print);

let keys = Object.keys(data);
console.log(keys);
let values = Object.values(data);
console.log(values)

