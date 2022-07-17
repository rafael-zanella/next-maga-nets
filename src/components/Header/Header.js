import React from 'react'
import {
  Container,
  Infos,
  Logo,
  City,
  Phone,
  Wishlist as WishlistAccess,
  InputArea,
} from './Header.styled'

import { GridContainer } from '@/components/GridContainer'

export function Header () {
  return (
    <Container>
      <GridContainer className='clearfix'>
        <div className='row'>
          <div className='col col-2 col-sm-3'>
            <Logo><a href='/'>MagaNets</a></Logo>
          </div>

          <div className='col col-10 col-sm-9'>
            <Infos className='row'>
              <City className='col col-4'>Cidade: Gravataí</City>
              <Phone className='col col-4'>Central de atendimento</Phone>
              <WishlistAccess className='col col-4'>
                <a href='/wishlist'>Lista de desejos</a> 
              </WishlistAccess>
            </Infos>

            <InputArea className='row'>
              <div className='col col-12'>
                <input style={{ width: '100%' }} />
              </div>
            </InputArea>
          </div>
        </div>
      </GridContainer>
    </Container>
  )
}