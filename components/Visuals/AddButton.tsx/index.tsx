export const AddButton = ({price, onClick}) => {
  return (
    <button onClick={onClick} className="button-with-gradient px-6 py-2 rounded-lg">
      <p>Agregar por <span className="font-bold">$ {price}</span></p>
    </button>
  )
}