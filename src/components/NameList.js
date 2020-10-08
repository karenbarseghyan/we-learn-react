import React from 'react'

function NameList() {
    const names = ['Bruce', 'Diana', 'Clark', 'Bruce']
    const NameList = names.map ((name,index) => <h2 key ={index}>{index}{name}</h2>)
    return <div> {NameList} </div>
}

export default NameList
