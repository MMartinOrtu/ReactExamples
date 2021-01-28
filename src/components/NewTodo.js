import React from 'react'

const NewTodo = ({NewTodo}) =>{
    let values = localStorage.getItem("myData");
    values = JSON.parse(values);
    console.log(values)

    const name  = values.name;
    const surnames = values.lastname;


    return(
        <div>
            <h2>{NewTodo}</h2>
            <p>{name}</p>
            <p>{surnames}</p>
        </div>
    )
}

export default NewTodo;