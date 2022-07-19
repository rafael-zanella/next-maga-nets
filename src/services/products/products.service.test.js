import { productsMock } from './products.mock'
import { getAllProducts } from './products.service'

describe('products.service', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(productsMock),
      status: 200
    })
  )


  it('should return the data correctly', async () => {
    const data = await getAllProducts()
    expect(data).toEqual(productsMock)
  })

  it('should return 404', async () => {
    fetch.mockImplementationOnce(() => Promise.reject({ status: 404 }))
    const data = await getAllProducts()
    expect(data.status).toBe(404)
  })

  it('should return status 500 when error', async () => {
    fetch.mockImplementationOnce(() => Promise.reject({ status: 500 }))
    const data = await getAllProducts()
    expect(data.status).toBe(500)
  })
})
