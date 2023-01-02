import { HTMLAttributes, ReactNode } from "react"

type ContainerProps = Pick<HTMLAttributes<HTMLDivElement>, "className"> & {
  children: ReactNode
}

export const Container = ({ children, ...rest }: ContainerProps) => (
  <div {...rest}>{children}</div>
)
