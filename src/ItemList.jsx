import React from 'react'

const ItemList = ({ items, handleDelete, handleEdit }) => {
    return (
        <div>
            <div>
                <h2>***Item List***</h2>
                <ol>
                    {items.map((item) => (
                        <li key={item.id}>
                            <h3>{item.name}
                                <button onClick={() => handleEdit(item)}>edit</button>
                                <button onClick={() => handleDelete(item.id)}> X</button> </h3>

                        </li>
                    ))}
                </ol>

            </div>
        </div>
    )
}

export default ItemList