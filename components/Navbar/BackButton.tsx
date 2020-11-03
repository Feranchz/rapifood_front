import { useRouter } from 'next/router'

export const BackButton = ({}) => {
  const router = useRouter()

  return (
    <button className="w-12 h-12 shadow-lg border-gray-400 rounded-lg" onClick={() => router.back()}>
      <img className="w-full h-full" src="/icons/angle-left-solid.svg" />
    </button>
  )
}