import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Header } from '@/components/Header/Header'
import { ProductsGridList } from '@/components/ProductsGridList/ProductsGridList'
import { getAllProducts } from '@/services/products/products.service'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'


export async function getServerSideProps () {
  let data  
  data = await getAllProducts()

  return {
    props: { data }
  }
}

export default function Home(props) {
  const [products, setProducts] = useState(props?.data?.products ?? [])

  const mapWishlistProducts = (wishlist) => {
    if (products && wishlist) {
      const mappedProducts = products.map(product => ({
        ...product,
        isDesired: wishlist.some((item) => item.id === product.id.toString())
      }))
      setProducts(mappedProducts)
    }
  }

  const addToWishlist = (product) => {
    const oldItems = JSON.parse(localStorage.getItem('wishlist')) || []
    const idAdded = oldItems.findIndex((item) => item.id === product.id)
  
    if(idAdded !== -1) {
      oldItems.splice(idAdded, 1)
    } else {
      oldItems.push(product)
    }
    mapWishlistProducts(oldItems)
    localStorage.setItem('wishlist', JSON.stringify(oldItems))
  }

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    mapWishlistProducts(wishlist)
  }, [])

  return (
    <div>
      <Header />
      <Breadcrumb crumbs={[]} />

      <ProductsGridList
        products={products}
        onClickProduct={addToWishlist} 
      />
    </div>
  )
}

Home.propTypes = {
  props: PropTypes.object,
  data: PropTypes.object
}