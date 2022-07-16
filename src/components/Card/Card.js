import { Container, Title, Price, FavContainer } from './Card.styled'
import PropTypes from 'prop-types'

export const Card = ({ id, title, imageURL, imageAlt, price, isDesired, onClick }) => {
  return (
    <Container>
      <FavContainer onClick={() => onClick(id)}>
        { 
          isDesired ? (
            <span className="fa-solid fa-heart red"></span>
          ) : (
            <span className="fa-solid fa-heart"></span>
          )
        }
      </FavContainer>

      <div>
        <img src={imageURL} alt={imageAlt} />
        <Title>{title}</Title>
        <Price>{price}</Price>
      </div>
    </Container>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string,
  price: PropTypes.string,
  isDesired: PropTypes.bool,
  onClick: PropTypes.func,
}