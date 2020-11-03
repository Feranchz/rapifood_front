export const SimpleButton = ({ icon = null, text = ""}) => {
  return (
    <button className="bg-thyellow shadow-md px-5 py-1 rounded-lg">
      <div>{icon}</div>
      <span className="text-xl">{text}</span>
    </button>
  )
}