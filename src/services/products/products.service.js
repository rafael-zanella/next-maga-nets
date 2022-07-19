export const getAllProducts = async () => {
  try {
    const data = await fetch('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (data.status === 200) {
      return data.json()
    }

    throw new Error({status: data?.status, message: 'Something went wrong'})
    
  } catch (e) {
    return { status: e.status ?? 500 }
  }
}