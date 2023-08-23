import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  color?: string
}

const Close = ({ color = '#545454', ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...rest}
  >
    <path
      fill={color}
      // eslint-disable-next-line max-len
      d="M21.414 3.336a1.926 1.926 0 0 0-1.349-3.31 1.914 1.914 0 0 0-1.363.587L11.01 8.325 3.323.613A1.919 1.919 0 0 0 1.2.14 1.918 1.918 0 0 0 .14 1.204a1.93 1.93 0 0 0 .47 2.13l7.684 7.714L.606 18.76a1.928 1.928 0 0 0 .047 2.674 1.916 1.916 0 0 0 2.665.047l7.693-7.713 7.688 7.715a1.916 1.916 0 0 0 2.665-.047 1.928 1.928 0 0 0 .047-2.673l-7.683-7.715 7.686-7.712Z"
    />
  </svg>
)
export default Close