const todos=[
{
    id: 1,
    text:"Take out trash",
    isCompleted:true,
},
{
    id:2,
    text:"Meeting with boss",
    isCompleted:true,
},
{
    id:3,
    text:"Dentist appt",
    isCompleted:false,
},
];


const todosJSON=JSON.stringify(todos)
console.log(todosJSON);
