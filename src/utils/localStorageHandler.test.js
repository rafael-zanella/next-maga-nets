import localStorageHandler from './localStorageHandler'

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(() => null),
    setItem: jest.fn(() => null)
  },
  writable: true
})

describe('localStorageHandler', () => {
  it('should call localStorage getItem', () => {
    localStorageHandler.get('myRandomItem')
    expect(window.localStorage.getItem).toHaveBeenCalledWith('myRandomItem')
  })

  it('should call localStorage setItem', () => {
    localStorageHandler.set('myOtherRandomItem', 'NextMagaNets')
    expect(window.localStorage.setItem).toHaveBeenCalledWith('myOtherRandomItem', '"NextMagaNets"')
  })
})