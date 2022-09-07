import React from "react"
import ContentLoader from "react-content-loader"

const SliderSkeleton = (props) => (
  <ContentLoader 
    speed={1.5}
    width={1200}
    height={390}
    viewBox="0 0 1000 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#c6c3c3"
    {...props}
  >
    <rect x="0" y="50" rx="0" ry="0" width="1000" height="400" />
  </ContentLoader>
)

export default SliderSkeleton

