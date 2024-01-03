import React from 'react';
import './style.css';
//import Todo from './todo';

const List = ({todos , toggleTodo}) => {
    return (
    
        todos.map(todo => {
            return (
                <div className='todo' key={todo.id}>
    
                <input className='check' type='checkbox' checked={todo.complete} onChange={(e) => toggleTodo(todo.id , e.target.checked)} ></input>
                <h3 className='todoname'>{todo.name}</h3>
                {
                    todo.checked = todo.complete ?(
                        <button className='btn'>
                            Done
                         </button>
                    ) :(
                        <p className='notdone'>
                            Not Done
                        </p>
                    )
                }
              
                 </div>
            )
        })
            
        
       
    )
}
export default List