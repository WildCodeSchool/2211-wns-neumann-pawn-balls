import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  color?: string
}

const Filter = ({ color = '#545454', ...rest}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...rest}
  >
    <path
      fill={color}
      // eslint-disable-next-line max-len
      d="M5 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM2.17 3a3.001 3.001 0 0 1 5.66 0H15a1 1 0 1 1 0 2H7.83a3.001 3.001 0 0 1-5.66 0H1a1 1 0 0 1 0-2h1.17ZM11 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8.17 9a3.001 3.001 0 0 1 5.66 0H15a1 1 0 1 1 0 2h-1.17a3 3 0 0 1-5.66 0H1a1 1 0 1 1 0-2h7.17ZM5 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.83 0a3 3 0 0 1 5.66 0H15a1 1 0 0 1 0 2H7.83a3 3 0 0 1-5.66 0H1a1 1 0 1 1 0-2h1.17Z"
    />
  </svg>
)
export default Filter