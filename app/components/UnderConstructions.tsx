

import clsx from 'clsx'
import { useTheme } from '~/utils/theme-provider'
import { Link } from './Link'

const faceSize = 250
const atlasToFaceRatio = 13/16

export const UnderConstructions = () => {
  const [ theme ] = /* useTheme() */ [ 'dark' ]
  
  return (
    <div className="flex flex-col gap-12 w-fit mx-auto lg:mx-0">
      <div className="w-fit mx-auto" style={{ minWidth: faceSize, height: faceSize * (1+atlasToFaceRatio) }}>
        <Link to="https://github.com/EmilEinarsen" className='rounded-full h-full'>
          <img 
            src='/profile.webp' 
            alt="Emil Einarsen" 
            className="aspect-square rotate-12 pointer-events-none" 
            width={faceSize} 
            height={faceSize} 
            loading='eager' 
            {...{
              fetchpriority: 'high'
            }}
          />
          <span className='sr-only'>Emil Einarsens Github Profile</span>
        </Link>
        <img 
          src={`/atlas${theme === 'dark' ? '-inverted' : ''}.webp`} 
          alt="Greek God Atlas" 
          className="translate-x-11 -translate-y-[31%] pointer-events-none" 
          width={faceSize * atlasToFaceRatio} 
          loading='eager' 
          {...{
            fetchpriority: 'high'
          }}
        />
      </div>
      <h1 className={clsx(
        'w-fit h-fit',
        'flex flex-col flex-wrap lg:flex-row lg:flex-nowrap gap-2 md:gap-6',
        'text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 uppercase whitespace-nowrap text-center',
        '-rotate-3'
      )}>
        <span className="not-sr-only whitespace-nowrap">🚧👷</span>
        Construction ahead
        <span className="not-sr-only whitespace-nowrap">🔨🚧</span>
      </h1>
    </div>
  )
}
