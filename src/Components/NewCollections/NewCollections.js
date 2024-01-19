import React from 'react'
import "../NewCollections/NewCollections.css"
import new_collection from "../Assests/new_collections"
import Item from '../Item/Item'

function NewCollections() {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i) =>{
                return <Item key={i} props={item}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections