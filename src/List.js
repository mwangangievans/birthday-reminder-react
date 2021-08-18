import React from 'react'
const List = (props) => {

    const {people} = props 
    return people.map((item) =>{
        return <p key ={item.id}>{item.name}</p>
    })
}
export default List