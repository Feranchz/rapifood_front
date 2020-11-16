import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRequest } from '../Utils/useRequests'
import { useUser } from '../Utils/useUser'

const Register = ({ loginStep, closeModal }) => {
  const [nameError, setNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { post } = useRequest()
  const { refetch } = useUser()

  useEffect(() => {
    setError('')
  }, [nameError, lastNameError, emailError, passwordError])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let values = {
      name: e.target.elements.name.value,
      lastname: e.target.elements.lastName.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    }

    let noErrors = true

    if(values.name.length <= 0){
      setNameError("Debe ingresar un nombre.")
      noErrors = false
    }

    if(values.lastname.length <= 0){
      setLastNameError("Debe ingresar un apellido.")
      noErrors = false
    }

    if(values.email.length <= 0){
      setEmailError("Debe ingresar un correo.")
      noErrors = false
    }

    if(!/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(values.email)){
      setEmailError("Debe ingresar un correo valido.")
      noErrors = false
    }

    if(values.password.length < 8){
      setPasswordError("La contraseña debe tener, al menos, 8 caracteres.")
      noErrors = false
    }

    if(!/\d+/.test(values.password)){
      setPasswordError("La contraseña debe tener, al menos, un número.")
      noErrors = false
    }

    if(noErrors){
      setIsLoading(true)
      const response = await post('/signup', values)
      if(response.status){
        localStorage.setItem("auth_token", response.data.api_token)
        closeModal()
        refetch()
      } else {
        setError("El correo ya esta registrado.")
      }
      setIsLoading(false)
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-simple-wrapper">
        <input onChange={() => setNameError('')} name="name" placeholder="Nombre" className={nameError ? "input-simple border border-red-500" : "input-simple"} />
        {
          nameError ?
          <p className="text-red-500 text-xs italic">{nameError}</p> :
          null
        }
      </div>
      <div className="input-simple-wrapper">
        <input onChange={() => setLastNameError('')} name="lastName" className={lastNameError ? "input-simple border border-red-500" : "input-simple"} placeholder="Apellido" />
        {
          lastNameError ?
          <p className="text-red-500 text-xs italic">{lastNameError}</p> :
          null
        }
      </div>
      <div className="input-simple-wrapper">
        <input onChange={() => setEmailError('')} name="email" className={emailError ? "input-simple border border-red-500" : "input-simple"} placeholder="Correo Electronico" />
        {
          emailError ?
          <p className="text-red-500 text-xs italic">{emailError}</p> :
          null
        }
      </div>
      <div className="input-simple-wrapper">
        <input type="password" onChange={() => setPasswordError('')} name="password" className={passwordError ? "input-simple border border-red-500" : "input-simple"} placeholder="Contraseña" />
        {
          passwordError ?
          <p className="text-red-500 text-xs italic">{passwordError}</p> :
          null
        }
      </div>
      <div>
        <button disabled={isLoading} type="submit" className="yellow-button w-full flex items-center justify-center">
          {
            isLoading ?
            <>
              <div className="loading-spinner h-4 w-4 mx-1"></div>
              <div className="loading-spinner h-4 w-4 mx-1"></div>
              <div className="loading-spinner h-4 w-4 mx-1"></div>
            </> :
            'Registrarse'
          }
        </button>
        {
          error ?
          <p className="text-red-500 italic text-center my-2">{error}</p> :
          null
        }
      </div>
      <div className="my-4">
        <p className="text-center">¿Ya tienes una cuenta? <a onClick={loginStep} className="text-thyellow font-bold cursor-pointer">¡Inicia sesión!</a></p>
      </div>
    </form>
  )
}

const Login = ({ registerStep, closeModal }) => {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [error, setError] = useState('')

  const { post } = useRequest()
  const { refetch } = useUser()

  useEffect(() => {
    setError('')
  }, [emailError, passwordError])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let values = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      remember_me: e.target.elements.remember_me.checked
    }

    let noErrors = true

    if(values.email.length <= 0){
      setEmailError("Debe ingresar un correo.")
      noErrors = false
    }

    if(!/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(values.email)){
      setEmailError("Debe ingresar un correo valido.")
      noErrors = false
    }

    if(values.password.length < 8){
      setPasswordError("La contraseña debe tener, al menos, 8 caracteres.")
      noErrors = false
    }

    if(!/\d+/.test(values.password)){
      setPasswordError("La contraseña debe tener, al menos, un número.")
      noErrors = false
    }

    if(noErrors){
      const response = await post('/login', values)
      if(response.status){
        localStorage.setItem('auth_token', response.token)
        closeModal()
        refetch()
      } else {
        setError('Correo o contraseña incorrectos.')
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="input-simple-wrapper">
        <input name="email" onChange={() => setEmailError('')} placeholder="Correo Electronico" className="input-simple" />
        {
          emailError ?
          <p className="text-red-500 text-xs italic">{emailError}</p> :
          null
        }
      </div>
      <div className="input-simple-wrapper">
        <input name="password" type="password" onChange={() => setPasswordError('')} placeholder="Contraseña" className="input-simple" />
        {
          passwordError ?
          <p className="text-red-500 text-xs italic">{passwordError}</p> :
          null
        }
      </div>
      <div className="my-4">
        <input name="remember_me" type="checkbox" />
        <label className="ml-2">Recordarme</label> 
      </div>
      <div>
        <button type="submit" className="yellow-button w-full">
          Iniciar Sesión
        </button>
        {
          error ?
          <p className="text-red-500 italic text-center my-2">{error}</p> :
          null
        }
      </div>
      <div className="my-4">
        <p className="text-center">¿Aún no tienes una cuenta? <a onClick={registerStep} className="text-thyellow font-bold cursor-pointer">¡Registrate!</a></p>
      </div>
    </form>
  )
}

export const AuthModal = ({visible, close, step = "register"}) => {
  const [actualStep, setActualStep] = useState(step)

  if (!visible) return null

  const handleStep = () => {
    switch(actualStep){
      case "register":
        return <Register loginStep={() => setActualStep('login')} closeModal={close} />
      break;
      case "login":
        return <Login registerStep={() => setActualStep('register')} closeModal={close} />
      break;
    }
  }

  return (
    <div className="w-full h-full top-0 left-0 flex items-center justify-center">
      <div onClick={close} className="absolute top-0 w-full h-full bg-black z-20 opacity-75"></div>
      <div className="fixed py-8 px-16 bg-white h-full md:h-auto w-full max-w-lg mx-auto rounded-lg shadow-lg z-30 top-0 md:top-40">
        <div className="absolute w-8 h-8 cursor-pointer top-20 right-20" onClick={close}>
          <Image src="/icons/times-circle-regular.svg" layout="fill" />
        </div>
        <div className="relative w-16 h-10 m-auto">
          <Image src="/logo.png" layout="fill" />
        </div>
        <div>
          {
            handleStep()
          }
        </div>
      </div>
    </div>
  )
}