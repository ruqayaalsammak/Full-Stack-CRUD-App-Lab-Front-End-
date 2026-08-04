import { Link } from "react-router"

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>{' | '}
            <Link to='/products'>Products</Link>{' | '}
            <Link to='/products/new'>Add a Product</Link>
        </nav>
    )
}

export default NavBar