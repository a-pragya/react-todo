//import React from 'react'

function MainContent(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return(
        
            <main>
                <input type="checkbox" checked={props.todo.completed} id="c1" name="cb1" 
                    onChange={() => props.handleChange(props.todo.id)}></input>
                <label style={props.todo.completed? completedStyle : null} htmlFor="cb1">{props.todo.todo}</label>
            </main>
        
    )
}

export default MainContent