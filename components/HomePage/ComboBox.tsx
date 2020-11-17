import Image from 'next/image'

export const ComboBox = ({ image, name, restaurant, price }) => {
  return (
    <div className="relative h-full w-full bg-red-900 shadow-gradient combo-wrapper">
      <div className="absolute h-full w-full inner-gradient z-30 none"></div>
      <Image src={image} layout="fill" className="combo-image" />
      <div className="absolute h-full w-full px-4 py-2 z-40">
        <div>
          <h3 className="text-4xl font-bold text-white">{name}</h3>
          <p className="text-2xl text-white">de <a className="font-bold">{restaurant}</a></p>
        </div>
        <div className="absolute bottom-0 right-0 bg-white px-4 py-2 rounded-tl-lg">
          <p className="text-4xl font-bold"><span className="text-thyellow">$</span> {price}</p>
        </div>
      </div>
    </div>
  )
}