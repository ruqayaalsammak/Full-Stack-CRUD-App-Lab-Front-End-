import { useState } from "react"
import { useNavigate } from "react-router"

const ProductForm = (props) => {
    const navigate = useNavigate()

    const initialState = {
        title: '',
        description: '',
        category: 'electronics',
        price: '',
        quantity: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await props.addProduct(formData)
    setFormData(initialState)
    navigate('/products')
  }

    return (
        <main>
            <h2>Add a product</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" onChange={handleChange} value={formData.title} required />

                <label>Description:</label>
                <input type="text" name="description" onChange={handleChange} value={formData.description} maxLength="500" />

                <label>Category:</label>
                <select name="category" onChange={handleChange} value={formData.category}  >
                <option value="electronics">electronics</option>
                <option value="food">food</option>
                <option value="clothing">clothing</option>
                <option value="furniture">furniture</option>
                <option value="other">other</option>
                </select>

                <label>Price:</label>
                <input type="number" step="0.01" min="0.01" name="price" onChange={handleChange} value={formData.price} required />

                <label>Quantity</label>
                <input type="number" min="0" name="quantity" onChange={handleChange} value={formData.quantity} required />

                <button type="submit">Add Product</button>
   
            </form>
        </main>
    )

}

export default ProductForm