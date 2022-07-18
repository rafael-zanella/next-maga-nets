import { Container, Title, Price, FavContainer, Remove } from './Card.styled'
import PropTypes from 'prop-types'
import { currencyFormatter } from '@/utils/currencyFormatter'

export const Card = ({
  id,
  title,
  imageURL,
  imageAlt,
  price,
  currencyId,
  isDesired,
  onClick,
  isRemoveOnly,
}) => {
  return (
    <Container>
      {
        isRemoveOnly ? (
          <Remove onClick={() => onClick({id})}><p>X</p></Remove>
        ) : (
          <FavContainer onClick={() => onClick({id, title, imageAlt, imageURL, price, currencyId})}>
            { 
              isDesired ? (
                <span className="fa-solid fa-heart red"></span>
              ) : (
                <span className="fa-solid fa-heart"></span>
              )
            }
          </FavContainer>
        )
      }

      <div>
        <img src={imageURL} alt={imageAlt} />
        <Title>{title}</Title>
        <Price>{currencyFormatter('pt-BR', currencyId).format(price)}</Price>
      </div>
    </Container>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string,
  price: PropTypes.number,
  currencyId: PropTypes.string,
  isDesired: PropTypes.bool,
  isRemoveOnly: PropTypes.bool,
  onClick: PropTypes.func,
}
