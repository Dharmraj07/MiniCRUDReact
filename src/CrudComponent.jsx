import React, { useState } from 'react'
import ItemList from './ItemList';

const CrudComponent = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemsName] = useState('');
    const [editingItem, setEditingItem] = useState(null);

    const handleSave = () => {
        if (editingItem) {
            const newItems = items.map((item) => (item.id === editingItem.id ? { ...item, name: itemName } : item))
            setItems(newItems);
            setEditingItem(null);
        } else {
            // If not editing, add a new item
            setItems(preItem => [...preItem, { id: Date.now(), name: itemName }])
        }

        setItemsName('');

    }

    const handleDelete = (itemId) => {
        // Use the filter function to create a new array without the item to be deleted
        const newItems = items.filter((item) => item.id !== itemId);
        // Set the new array as the state
        setItems(newItems);
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setItemsName(item.name);
    }



    return (
        <div>
            <h1>CRUD React App</h1>
            <div>
                <h2>Add or Edit Item</h2>
                <input name='itemName' type='text' value={itemName} onChange={(e) => (setItemsName(e.target.value))} />
                <button onClick={handleSave}>Save</button>
            </div>

            <ItemList items={items} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    )
}

export default CrudComponent