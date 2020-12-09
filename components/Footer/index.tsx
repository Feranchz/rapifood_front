export const Footer = () => {
  return (
    <footer className="max-w-8xl px-6 py-4">
      <div className="flex flex-wrap mx-auto border-b py-2">
        <div className="w-full md:w-3/12 flex">
          <img src="/logo.png" className="h-8 w-12" />
          <h1 className="text-xl font-bold ml-2">Rapifood</h1>
        </div>
        <div className="w-full md:w-3/12">
          <nav>
            <a className="block py-2">Home</a>
            <a className="block py-2">Trabaja con nosotros</a>
            <a className="block py-2">Sobre Nosotros</a>
          </nav>
        </div>
        <div className="w-full md:w-3/12">
          <nav>
            <a className="block py-2">Términos de Uso</a>
            <a className="block py-2">Sobre tu privacidad</a>
          </nav>
        </div>
        <div className="w-full md:w-3/12">
          <nav>
            <ul>
              <li>
                Instagram
              </li>
              <li>
                Twitter
              </li>
              <li>
                Facebook
              </li>
              <li>
                Whatsapp
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex px-2 py-4">
        <p>Proyecto para Comercio Electronico en la UCV.</p>
      </div>
    </footer>
  )
}