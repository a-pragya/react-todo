import React from 'react'

function ContactCard(props){
    return(
        <div>
            <img scr={props.imgUrl} />
            <h1>{props.name}</h1>
            <h3>Phone: {props.phone}<br></br>Email:{props.email}
            </h3>
        </div>



    )
}

export default ContactCard