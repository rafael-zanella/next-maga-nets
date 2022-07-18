
import { Card } from '../Card/Card'
import { GridContainer } from '../GridContainer'
import PropTypes from 'prop-types'


export const ProductsGridList = ({ products, onClickProduct }) => {
  return (
    <GridContainer className='clearfix'>
      <div className="row">

        {
          !products && (
            <>Ocorreu um erro ao buscar os produtos!</>
          )
        }

        {
          products?.length === 0 && (
            <>Nenhum produto encontrado!</>
          )
        }

        {
          products && products.map(product => (
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <Card
                id={product.id.toString()}
                title={product.title}
                imageAlt={`${product.title}, ${product.style}`}
                imageURL="https://firebasestorage.googleapis.com/v0/b/my-news-app-ad6d7.appspot.com/o/maganets%2Fshirt.svg?alt=media&token=e1534d49-4270-4929-a0ec-0649acfbfff2"
                isDesired={product.isDesired} // todo
                isRemoveOnly={product.isRemoveOnly}
                price={product.price}
                currencyId={product.currencyId}
                onClick={onClickProduct}
              />
            </div>
          ))
        }
      </div>
    </GridContainer>
  )
}

ProductsGridList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    sku: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    availableSizes: PropTypes.object,
    style: PropTypes.string,
    price: PropTypes.number,
    installments: PropTypes.number,
    currencyId: PropTypes.string,
    currencyFormat: PropTypes.string,
    isFreeShipping: PropTypes.bool,
    image: PropTypes.string,
    isRemoveOnly: PropTypes.bool,
    isDesired: PropTypes.bool
  })),
  onClickProduct: PropTypes.func,
}