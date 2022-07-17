import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { Header } from '@/components/Header/Header'
import { ProductsGridList } from '@/components/ProductsGridList/ProductsGridList'
import { getAllProducts } from '@/services/products/products.service'

import PropTypes from 'prop-types'


export async function getServerSideProps () {
  let data  
  data = await getAllProducts()

  return {
    props: { data }
  }
}

export default function Home(props) {
  return (
    <div>
      <Header />
      <Breadcrumb crumbs={[]} />

      <ProductsGridList
        products={props.data?.products}
        onClickProduct={() => console.log('click')} 
      />
    </div>
  )
}

Home.propTypes = {
  props: PropTypes.object,
  data: PropTypes.object
}