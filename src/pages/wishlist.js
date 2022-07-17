import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Header } from '@/components/Header/Header'
import { ProductsGridList } from '@/components/ProductsGridList/ProductsGridList'
import { useEffect, useState } from 'react'

export default function Wishlist() {
  const [products, setProducts] = useState([])

  const removeFromWishlist = (productId) => {
    const wishlist = [ ...products ]
    const index = wishlist.findIndex((item) => item.id === productId)
    wishlist.splice(index, 1)
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    setProducts(wishlist)
  }

  const addIsRemoveOnlyProp = (wishlist) =>{
    const mapped = wishlist.map(item => ({
      ...item,
      isRemoveOnly: true,
    }))
    setProducts(mapped)
  }

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    addIsRemoveOnlyProp(wishlist)
  }, [])


  return (
    <div>
      <Header />
      <Breadcrumb crumbs={[{ url: '/wishlist', title: 'Wishlist' }]} />
      <ProductsGridList products={products} onClickProduct={(productId) => removeFromWishlist(productId)} />
    </div>
  )
}
