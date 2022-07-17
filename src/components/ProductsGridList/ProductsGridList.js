
import { Card } from '../Card/Card'
import { GridContainer } from '../GridContainer'
import PropTypes from 'prop-types'


export const ProductsGridList = ({ onClickProduct }) => {
  return (
    <GridContainer className='clearfix'>
      <div className="row">
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
          <Card
            id="1"
            title="Produto para bebe 2"
            imageAlt="alt"
            imageURL="https://firebasestorage.googleapis.com/v0/b/my-news-app-ad6d7.appspot.com/o/maganets%2Fshirt.svg?alt=media&token=e1534d49-4270-4929-a0ec-0649acfbfff2"
            isDesired={false}
            price="R$ 4,99"
            onClick={onClickProduct}
          />
        </div>
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
          <Card
            id="2"
            title="Produto para bebe"
            imageAlt="alt"
            imageURL="https://firebasestorage.googleapis.com/v0/b/my-news-app-ad6d7.appspot.com/o/maganets%2Fshirt.svg?alt=media&token=e1534d49-4270-4929-a0ec-0649acfbfff2"
            isDesired={true}
            price="R$ 4,99"
            onClick={onClickProduct}
          />
        </div>
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
          <Card
            id="3"
            title="Produto para bebe"
            imageAlt="alt"
            imageURL="https://firebasestorage.googleapis.com/v0/b/my-news-app-ad6d7.appspot.com/o/maganets%2Fshirt.svg?alt=media&token=e1534d49-4270-4929-a0ec-0649acfbfff2"
            isDesired={false}
            price="R$ 4,99"
            onClick={onClickProduct}
          />
        </div>
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
          <Card
            id="4"
            title="Produto para bebe"
            imageAlt="alt"
            imageURL="https://firebasestorage.googleapis.com/v0/b/my-news-app-ad6d7.appspot.com/o/maganets%2Fshirt.svg?alt=media&token=e1534d49-4270-4929-a0ec-0649acfbfff2"
            isDesired={false}
            price="R$ 4,99"
            onClick={onClickProduct}
          />
        </div>
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
          <Card
            id="5"
            title="Produto para bebe"
            imageAlt="alt"
            imageURL="https://firebasestorage.googleapis.com/v0/b/my-news-app-ad6d7.appspot.com/o/maganets%2Fshirt.svg?alt=media&token=e1534d49-4270-4929-a0ec-0649acfbfff2"
            isDesired={false}
            price="R$ 4,99"
            onClick={onClickProduct}
          />
        </div>
      </div>
    </GridContainer>
  )
}

ProductsGridList.propTypes = {
  onClickProduct: PropTypes.func
}