import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Header } from '@/components/Header/Header'
import { ProductsGridList } from '@/components/ProductsGridList/ProductsGridList'

export default function Home() {
  return (
    <div>
      <Header />
      <Breadcrumb crumbs={[]} />
      <ProductsGridList onClickProduct={() => console.log('click')} />
    </div>
  )
}
