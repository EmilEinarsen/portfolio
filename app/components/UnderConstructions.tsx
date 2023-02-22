import React from 'react'
import { useTheme } from '~/utils/theme-provider'

const faceSize = 300
const atlasToFaceRatio = 13/16

export const UnderConstructions = () => {
  const [ theme ] = useTheme()
  return (
    <div className="h-screen w-full flex flex-col gap-12 justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-orange-500 uppercase flex flex-col xl:flex-row flex-wrap text-center justify-center gap-2 md:gap-6 h-fit">
        <span className="not-sr-only">🚧👷</span>
        Construction ahead
        <span className="not-sr-only">🔨🚧</span>
      </h1>
      <div className="relative w-fit h-fit mx-auto" style={{ minWidth: faceSize, height: faceSize * (1+atlasToFaceRatio) }}>
        <img src='/profile.webp' alt="me" className="aspect-square rotate-12" width={faceSize} />
        <img src={`/atlas${theme === 'dark' ? '-inverted' : ''}.webp`} className="mx-auto translate-x-6 -translate-y-[31%]" width={faceSize * atlasToFaceRatio} />
      </div>
    </div>
  )
}
