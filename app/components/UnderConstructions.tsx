

import { useTheme } from '~/utils/theme-provider'
import { Link } from './Link'

const faceSize = 250
const atlasToFaceRatio = 13/16

export const UnderConstructions = () => {
  const [ theme ] = useTheme()
  return (
    <div className="h-screen w-full flex flex-col gap-12 justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500 uppercase flex flex-col xl:flex-row flex-wrap text-center justify-center gap-2 md:gap-6 h-fit -rotate-3">
        <span className="not-sr-only">🚧👷</span>
        Construction ahead
        <span className="not-sr-only">🔨🚧</span>
      </h1>
      <div className="relative w-fit h-fit mx-auto" style={{ minWidth: faceSize, height: faceSize * (1+atlasToFaceRatio) }}>
        <Link to="https://github.com/EmilEinarsen" className='rounded-full h-full'>
          <img src='/profile.webp' alt="Emil Einarsen" className="aspect-square rotate-12 pointer-events-none" width={faceSize} />
          <span className='sr-only'>Emil Einarsens Github Profile</span>
        </Link>
        <img src={`/atlas${theme === 'dark' ? '-inverted' : ''}.webp`} alt="Greek God Atlas" className="mx-auto translate-x-5 -translate-y-[31%] pointer-events-none" width={faceSize * atlasToFaceRatio} />
      </div>
    </div>
  )
}
