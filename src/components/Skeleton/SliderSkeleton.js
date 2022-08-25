import React from "react"
import ContentLoader from "react-content-loader"

const SliderSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={390}
    viewBox="0 0 0 0"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="50" rx="0" ry="0" width="100%" height="90%" />
  </ContentLoader>
)

export default SliderSkeleton

