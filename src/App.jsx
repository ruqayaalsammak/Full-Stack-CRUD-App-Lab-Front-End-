import * as productService from './services/products'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import ProductList from './pages/ProductList'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import ProductForm from './pages/ProductForm'
import UpdateProduct from './pages/UpdateProduct'

const App = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const productsData = await productService.index()
        setProducts(productsData)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAllProducts()
  }, [])

  const addProduct = async (formData) => {
    const newProduct = await productService.create(formData)
    setProducts([...products, newProduct])
  }

  const deleteProduct = async (productId) => {
    await productService.deleteProduct(productId)
    const filteredProducts = products.filter((p) => p._id !== productId)
    setProducts(filteredProducts)
  }

  const updateProduct = async (productId, formData) => {
    const updateProduct = await productService.update(productId, formData)
    const updatedProductsArray = products.map((p) => {
      return p._id === productIdId ? updateProduct : p
    })
    setProducts(updatedProductsArray)
  }

  return (
    <>
      <NavBar />
      <h1>Product Managment</h1>
      
      <Routes>
        <Route path="/" element={<h2>Welcome to the Product Managment</h2>} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route path="/products/:productId" element={<ProductDetails products={products} isLoading={isLoading} deleteProduct={deleteProduct} />} />
        <Route path="/products/new" element={<ProductForm addProduct={addProduct} />} />
        <Route path="/products/:productId/edit" element={<UpdateProduct products={products} updateProduct={updateProduct} />} />
        <Route path="*" element={<h2>Page Not Found 👎</h2>} />
      </Routes>

    </>
  )
}

export default App
