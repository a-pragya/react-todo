//ToDo app

import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import MainContent from './component/MainContent'
//import ContactCard from './component/ContactCard'

import TodoData from './data/TodoData'
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos : TodoData
    }
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(id){
    //this.setState({todos})
    this.setState( prevState => {
      const updatedTodos = prevState.todos.map( todo =>{
        if (todo.id === id){
          todo.completed = ! todo.completed
          console.log("matched id",id)
        }
        return todo
      })
      console.log(updatedTodos)
      return updatedTodos
    })
    //console.log("changed",id)
  }

  render(){
    const todoComponents = this.state.todos.map( 
      todoItem => 
      <MainContent 
        key={todoItem.id}
        todo={todoItem}
        handleChange = {this.handleChange}
      />
    )
    console.log(todoComponents)
    return (
      <div>
        <Header />
        {todoComponents}
        <Footer />
      </div>
    );

  }
}
// function App() {
//   const todoComponents = TodoData.map( 
//     todoItem => 
//     <MainContent 
//       key={todoItem.id}
//       todo={todoItem}
//     />
//   )
//   console.log(todoComponents)
//   return (
//     <div>
//       <Header />
//       {todoComponents}
//       <Footer />
//     </div>
//   );
// }

export default App;
