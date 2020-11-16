const URL_BASE = "http://rapifood.test/api"

export const useRequest = () => {
  const post = async (endpoint, data) => {
    let response = await fetch(URL_BASE + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json();
  }

  const get = async (endpoint) => {
    let token = localStorage.getItem('auth_token')
    let response = await fetch(URL_BASE + endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token ? `Bearer ${token}` : null
      }
    })
    return response.json()
  }

  return {
    post,
    get
  }
}