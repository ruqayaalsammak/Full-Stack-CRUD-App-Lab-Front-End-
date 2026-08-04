import { useParams, useNavigate, Link } from "react-router"

const ProductDetails = (props) => {
    const { productId } = useParams()
    const navigate = useNavigate()

    const product = props.product.find((p) => p._id === productId)

    if (props.isLoading) {
        return <p>Loading product...</p>
    }

    if (!product) {
        return <h2>Product not found.</h2>
    }
    const handleDelete = async () => {
        await props.deleteProduct(productId)
        navigate('/products')
    }

    return (
        <main>
            <h2>{product.title}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <p>Description: ${product.description}</p>
            <button onClick={handleDelete}>Delete {product.title}</button>
            <Link to={`/products/${productId}/edit`}>Edit {product.title}</Link>
        </main>
    )
}

export default ProductDetails