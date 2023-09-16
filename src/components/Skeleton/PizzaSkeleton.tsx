import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"
import { JSX } from "react/jsx-runtime"

const PizzaSkeleton = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader 
    speed={2}
    width={291}
    height={532}
    viewBox="0 0 291 532"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="237" rx="10" ry="10" width="232" height="48" /> 
    <rect x="4" y="291" rx="10" ry="10" width="140" height="39" /> 
    <rect x="6" y="336" rx="10" ry="10" width="100" height="33" /> 
    <rect x="6" y="376" rx="10" ry="10" width="125" height="33" /> 
    <rect x="139" y="377" rx="10" ry="10" width="125" height="33" /> 
    <circle cx="114" cy="114" r="114" />
  </ContentLoader>
)

export default PizzaSkeleton