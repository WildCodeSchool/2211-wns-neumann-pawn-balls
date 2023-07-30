import { SVGProps } from "react"

interface Props extends SVGProps<SVGSVGElement> {
  color?: string
}

const TrekSvg = ({ color = "#545454", ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={36}
    fill="none"
    {...rest}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.478}
      d="m2.435 33.804 3.478-6.956m6.957 6.956v-6.956L7.652 21.63l1.74-10.434 5.217 6.956 5.217 3.478M9.391 4.24a1.74 1.74 0 1 0 3.479 0 1.74 1.74 0 0 0-3.479 0Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.478}
      d="m7.652 21.63-3.177-2.118a3.478 3.478 0 0 1-1.446-3.739l.487-1.943a3.478 3.478 0 0 1 3.373-2.634H9.39l6.957 1.739 5.217-3.478m-1.74 8.695v15.652m-1.738-1.739h3.478"
    />
  </svg>
)
export default TrekSvg