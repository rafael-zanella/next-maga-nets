import { GridContainer } from '../GridContainer'
import { Container } from './Breadcrumb.styled'
import PropTypes from 'prop-types'

export const Breadcrumb = ({ crumbs }) => {
  return (
    <GridContainer>
      <Container>
        <li><a href="/">Home</a></li>
        
        { crumbs.map((crumb) => (
          <li key={crumb.url}>
            <a href={crumb.url}> {crumb.title} </a>
          </li>
        ))}
        
      </Container>
    </GridContainer>
  )
}

Breadcrumb.propTypes = {
  crumbs: PropTypes.array
}