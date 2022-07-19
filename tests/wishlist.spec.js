import { render, screen } from '@testing-library/react'
import Wishlist from '@/pages/wishlist'
import localStorageHandler from '@/utils/localStorageHandler'

describe('Wishlist', () => {
  jest.spyOn(localStorageHandler, 'get').mockReturnValue([])

  it('should render Header', () => {
    render(<Wishlist />)
    screen.getByTestId('header')
    screen.getByTestId('breadcrumbs')
    screen.getByTestId('products_grid_list')
  })

  it('should get data from local storage', () => {
    render(<Wishlist />)
    expect(localStorageHandler.get).toHaveBeenCalledWith('wishlist')
  })

  it('should remove product from wishlist', () => {
    // TODO
  })
})