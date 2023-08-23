import * as React from "react"
import { SVGProps } from "react"
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={62}
    fill="none"
    {...props}
  >
    <path
      stroke="#4ECB71"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M31 58.77c15.337 0 27.77-12.433 27.77-27.77S46.338 3.23 31 3.23 3.23 15.662 3.23 31 15.662 58.77 31 58.77Z"
    />
    <path
      stroke="#4ECB71"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M55.47 44.144H27.052a10.489 10.489 0 1 1 7.415-17.904"
    />
    <path
      stroke="#4ECB71"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M53.103 47.816h-26.05c-7.821 0-14.16-6.34-14.16-14.16 0-7.821 6.339-14.16 14.16-14.16 1.92 0 3.75.383 5.42 1.075"
    />
    <path
      stroke="#4ECB71"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M49.748 51.486H27.053c-9.848 0-17.83-7.983-17.83-17.83 0-9.848 7.982-17.83 17.83-17.83"
    />
  </svg>
)
export default Logo