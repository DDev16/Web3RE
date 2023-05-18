import React, { useState, useEffect } from 'react'
import MapIcon from '@heroicons/react/outline/MapIcon'
import ArrowCircleDownIcon from '@heroicons/react/outline/ArrowCircleDownIcon'
import { useRouter } from 'next/dist/client/router'
import { LocationSearch } from 'src/components/organisms/SearchHomesFilter/filterUtils'

export interface IHeroProps {
  className?: string
  executeScroll: () => void
}

const Hero = ({ className, executeScroll }: IHeroProps) => {
  const router = useRouter()
  const [wordIndex, setWordIndex] = useState(0)

  const words = [
    'Smart Contracts',
    'Blockchain',
    'Security',
    'Transferability',
    'Decentralization',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000) // Change the word every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen bg-fixed bg-cover -z-10 bg-opacity-80 bg-hero ${className}`}
    >
      <div className='my-auto'>
        <div className='text-5xl font-black tracking-tight text-center text-white sm:text-6xl md:max-w-lg lg:text-7xl leading-90p'>
          Revolutionizing Real Estate With <br />
          <em>{words[wordIndex]}</em>
        </div>

        <LocationSearch
          className='mt-12 '
          onChange={() => router.push({ pathname: '/homes' }, '/homes')}
        />

        <button
          type='button'
          onClick={() => executeScroll()}
          className='w-full px-4 py-2 mt-6 font-bold text-white underline rounded-md underline-offset-4 hover:bg-black/20'
        >
          Or, Use the interactive map.
          <MapIcon
            className='inline w-8 h-8 p-1 animate-pulse'
            data-chromatic='ignore'
          />
        </button>
      </div>
      <ArrowCircleDownIcon className='bottom-0 w-8 h-8 text-white justify-self-stretch animate-bounce' />
    </div>
  )
}

export default Hero
