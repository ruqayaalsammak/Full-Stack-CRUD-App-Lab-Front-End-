import { Link } from "react-router"

const ProductList = (props) => {
    return (
        <main>
            {props.products.map((product) => (
                <div Key={product._id}>
                    <h3>
                        <Link to={`/products/${product._id}`}>
                        {product.title}
                        </Link>
                    </h3>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
            )
        )}
        </main>
    )
}

export default ProductList