import React,{useState} from 'react'

const TodoList = ({TodoList}) =>{

    const [name, setName] = useState("");
    const [surnames, setSurnames] = useState("");
    
    const saveContentInput = e =>{
        e.preventDefault()
    
        const data = {name:`${name}`,lastname:`${surnames}`};
        console.log(data);
        localStorage.setItem("myData", JSON.stringify(data));
        window.location.href = "/new";
    }

    
    return(
        <div>
            <h1>{TodoList}</h1>
            <form onSubmit={saveContentInput}>
                <input
                    type="text"
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="text"
                    onChange={e => setSurnames(e.target.value)}
                    placeholder="Surnames"
                />
                <input 
                    type="submit"  
                    value="send to NewTodo"
                />
            </form>
        </div>
    )
}

export default TodoList;