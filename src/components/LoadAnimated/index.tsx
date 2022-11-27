import Lottie from 'react-lottie'
import * as loadAnimate from 'assets/load_animated.json'

interface LoadAnimated {
  size?: number
}

export const LoadAnimated: React.FC<LoadAnimated> = ({ size = 300 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadAnimate,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Lottie
      options={defaultOptions}
      height={size}
      width={size}
      style={{ margin: 0 }}
    />
  )
}
