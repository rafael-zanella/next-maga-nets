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
import Link from 'next/link'
import { Input } from '../Input/Input'


export function Header () {
  return (
    <Container data-testid='header'>
      <GridContainer className='clearfix'>
        <div className='row'>
          <div className='col col-6 col-sm-7 col-md-8 col-lg-3'>
            <Logo><Link href='/'>MagaNets</Link></Logo>
          </div>

          <div className='col col-6 col-sm-5 col-md-4 col-lg-9'>
            <Infos>
              <City>
                <span className='fa-solid fa-location-dot'></span>
                <p>Cidade: Gravataí</p>
              </City>
              
              <Phone>
                <span className='fa-solid fa-phone'></span>
                <p>Central de atendimento</p>
              </Phone>
              
              <Link href='/wishlist'>
                <WishlistAccess data-testid="wishlist_btn">
                  <span className='fa-solid fa-heart'></span>
                  <p>Lista de desejos</p>
                </WishlistAccess>
              </Link> 
            </Infos>
          </div>
        </div>

        <InputArea className='row'>
          <div className='col col-12 col-lg-9 offset-lg-3'>
            <Input placeholder="Busca" />
          </div>
        </InputArea>
      </GridContainer>
    </Container>
  )
}