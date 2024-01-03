import React , {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './style.css';

import List from './List';

const App = () => {

    const [newTodo , setTodo] = useState('')

    const [todos,setTodos] = useState([])

    //using addTodo() function to search icon svg

      function addTodo() {
        
        
        
          setTodos((newTodos) => [
              ...newTodos, {
                  id : crypto.randomUUID() , name : newTodo , complete : false
                }
             ])
            setTodo('')
         
        
    }




    //using onSubmit to form

    function handleSubmit(e) {
        e.preventDefault()

        setTodos((newTodos) => [
            ...newTodos, {
                id: crypto.randomUUID() ,
                name: newTodo,
                complete: false
            }
        ])
        setTodo('');
    }


    //to make checkbox work


    function toggleTodo(id , complete) {
       setTodos(newTodos => {
        return newTodos.map(todo => {
            if(todo.id === id){
                return {...todo , complete}
            }
            return todo
        })
       
       })
    }


    //delete All
    function deltetAll(){
        setTodos('');
    }


    //delete those are done

    function deleteDone(complete){
        setTodos(newTodos => {
            return newTodos.filter(todo => !todo.complete)
        })
    }



    return (

        <div className='container'>
        <form   onSubmit={handleSubmit}>
        <h1 className='title'>To-Do list</h1>
        <input className='textbox' placeholder='To study'  value={newTodo} onChange={e => setTodo(e.target.value)} 
        />
        <svg className='add' onClick={() => addTodo()} xmlns="http://www.w3.org/2000/svg" fill='violet' height="36" width="56" viewBox="0 0 202 512"><path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/></svg>


            <div className='qty'> {todos.length} list/s </div>

        </form>

        <div className='lists'>

       {
        todos.length >0 ?(
            <List todos={todos} toggleTodo={toggleTodo} />
        ): (
            <p className='nolist'>No List</p>
        )
       }
        
        </div>

        <div className='btns'>
            <button className='button' onClick={() => deltetAll()}>Clear All</button>
            <button className='button' onClick={() => deleteDone(todos.complete)}>Clear What is/are Done</button>
        </div>

    
            
       

        </div>
    )
}
export default App