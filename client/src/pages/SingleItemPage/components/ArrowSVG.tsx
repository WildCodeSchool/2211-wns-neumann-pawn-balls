import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  color?: string
  width?: number
  height?: number
}

const Arrow = ({ color = '#37373D', width = 15, height = 26, ...rest}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <path
      fill={color}
      // eslint-disable-next-line max-len
      d="M1.172 1.538a2.158 2.158 0 0 0 0 3.055L9.578 13l-8.406 8.407a2.16 2.16 0 1 0 3.055 3.055l9.945-9.945a2.16 2.16 0 0 0 0-3.055L4.227 1.517c-.824-.824-2.21-.824-3.055.021Z"
    />
  </svg>
)
export default Arrow
