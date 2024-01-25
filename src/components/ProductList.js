import React, { useCallback, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

function ProductList() {
  // const [products, setProducts] = useState([])
  const [url, setUrl] = useState('http://localhost:8000/products/')

  const { data: products } = useFetch(url)

  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setProducts(data)
  // }, [url])

  // useEffect(() => {
  //   fetchProducts()
  // }, [fetchProducts])

  // console.log(products)
  return (
    <section>
      <div className='filter'>
        <button onClick={() => setUrl('http://localhost:8000/products')}>
          all
        </button>
        <button
          onClick={() => setUrl('http://localhost:8000/products?in_stock=1')}
        >
          instock
        </button>
      </div>
      {products &&
        products.map((product) => (
          <div className='card' key={product.id}>
            <p className='id'>{product.id}</p>
            <p className='name'> {product.name}</p>
            <p className='info'>
              <span>${product.price}</span>
              <span className={product.in_stock ? 'instock' : 'unavailable'}>
                {product.in_stock ? 'in stock' : 'unavailable'}
              </span>
            </p>
          </div>
        ))}
    </section>
  )
}

export default ProductList
