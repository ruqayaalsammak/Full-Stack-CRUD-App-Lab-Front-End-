import { useState } from "react";
import { useParams, useNavigate } from "react-router"

const UpdateProduct = (props) => {
    const { productId } = useParams()
    const navigate = useNavigate()

    const productToEdit = props.product.find((p) => p._id === productId)

    const initialState = {
        title: productToEdit ? productToEdit.title : '',
        discription: productToEdit ? productToEdit.discription : '',
        category: productToEdit ? productToEdit.category : 'electronics',
        price: productToEdit ? productToEdit.price : '',
        quantity: productToEdit ? productToEdit.quantity : '',
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit =  async (event) => {
        event.preventDefault()
        await props.updateProduct(productId, {
            ...formData,
            price: Number(formData.price),
            quantity: Number(formData.quantity),
        })
        navigate('/products')
    }

    return (
        <main>
            <h2>Edit Products</h2>
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

                <button type="submit">Edit Products</button>
                </form>
        </main>
    )
}

export default UpdateProduct