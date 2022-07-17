import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Header } from '@/components/Header/Header'
import { ProductsGridList } from '@/components/ProductsGridList/ProductsGridList'

export default function Wishlist() {
  return (
    <div>
      <Header />
      <Breadcrumb crumbs={[{ url: '/wishlist', title: 'Wishlist' }]} />
      <ProductsGridList />
    </div>
  )
}
