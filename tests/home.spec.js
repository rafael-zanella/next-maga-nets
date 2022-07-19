import { render, screen } from '@testing-library/react'
import Home, { getServerSideProps } from '@/pages'
import { productsMock } from '@/services/products/products.mock'
import * as Service from '@/services/products/products.service'

describe('Home', () => {
  let getAllProducts
  
  beforeEach(() => {
    getAllProducts = jest.spyOn(Service, 'getAllProducts').mockResolvedValue(productsMock)
  })

  it('should render Header, Breadcrumbs and Products', () => {
    render(<Home />)
    screen.getByTestId('header')
    screen.getByTestId('breadcrumbs')
    screen.getByTestId('products_grid_list')
  })

  it('should perform callback when clicking on the Wishlist menu', async () => {
    // TODO
  })

  it('should load the products on the server side', async () => {
    const response = await getServerSideProps()
    
    expect(response).toEqual({
      props: {
        data: {
          ...productsMock
        }
      }
    })
 
    expect(getAllProducts).toHaveBeenCalled()
  })
})