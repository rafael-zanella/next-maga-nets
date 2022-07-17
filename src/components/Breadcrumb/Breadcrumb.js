import { GridContainer } from '../GridContainer'
import { Container } from './Breadcrumb.styled'
import PropTypes from 'prop-types'
import Link from 'next/link'


export const Breadcrumb = ({ crumbs }) => {
  return (
    <GridContainer>
      <Container>
        <li><Link href="/">Home</Link></li>
        
        { crumbs.map((crumb) => (
          <li key={crumb.url}>
            <Link href={crumb.url}>{crumb.title}</Link>
          </li>
        ))}
        
      </Container>
    </GridContainer>
  )
}

Breadcrumb.propTypes = {
  crumbs: PropTypes.array
}