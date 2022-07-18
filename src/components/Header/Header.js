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
    <Container>
      <GridContainer className='clearfix'>
        <div className='row'>
          <div className='col col-2 col-sm-3'>
            <Logo><Link href='/'>MagaNets</Link></Logo>
          </div>

          <div className='col col-10 col-sm-9'>
            <Infos className='row'>
              <City className='col col-4'>Cidade: Gravataí</City>
              <Phone className='col col-4'>Central de atendimento</Phone>
              <WishlistAccess className='col col-4'>
                <Link href='/wishlist'>Lista de desejos</Link> 
              </WishlistAccess>
            </Infos>

            <InputArea className='row'>
              <div className='col col-12'>
                <Input placeholder="Busca" />
              </div>
            </InputArea>
          </div>
        </div>
      </GridContainer>
    </Container>
  )
}