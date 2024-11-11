import React from 'react'

const Edit = () => {
  return (
    <div>
        <div>
            <h1> Add Product</h1>
        </div>

        <div>
            <label>Car Name </label>
            <input 
            type='text'
            name='carname'
            placeholder='Car Name'
            />
        </div>


        <div>
            <label>Car Price </label>
            <input 
            type='text'
            name='carprice'
            placeholder='Car Price'
            />
        </div>


        <div>
            <label>Car Images</label>
            <input 
            type='file'
            name='carfile image'
            placeholder='Car Image'
            />
        </div>


        <div>
            <label>Car Video </label>
            <input 
            type='file'
            name='carvideo'
            placeholder='Car Video'
            />
        </div>

        <div>
            <label>Car Description</label>
            <input 
            type='text'
            name='cardescription'
            placeholder='Car Description'
            />
        </div>

        <div>
            <button>Edit Product</button>
        </div>
        
        
        
        
        
        
    </div>
  )
}

export default Edit