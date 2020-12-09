import cookieCutter from "cookie-cutter"

const URL_BASE = process.env.NEXT_PUBLIC_API_URL

export const useRequest = () => {
  const post = async (endpoint, data, tk = null) => {
    let token = null
    if (tk == null){
      token = cookieCutter.get("auth_token")
    } else {
      token = tk
    }

    let response = await fetch(URL_BASE + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": token ? `Bearer ${token}` : null
      },
      body: JSON.stringify(data)
    })
    return response.json();
    
  }

  const get = async (endpoint, tk = null) => {
    let token = null
    if (tk == null){
      token = cookieCutter.get("auth_token")
    } else {
      token = tk
    }
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