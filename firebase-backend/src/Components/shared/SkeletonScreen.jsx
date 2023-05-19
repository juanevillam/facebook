import React from "react"
import ContentLoader from "react-content-loader"

export const SkeletonScreen = (  ) => (
  <div className="bg-white mt-3 max-w-lg mx-auto h-max rounded-none md:rounded-xl animate__animated animate__fadeIn animate__faster">
    <ContentLoader speed={ 2 } width="100%" height="450" viewBox="0 0 512 450" backgroundColor="#e0dddd" foregroundColor="#cecece" >
      <circle cx="33" cy="35" r="22" />
      <rect x="65" y="20" rx="3" ry="3" width="90" height="7" /> 
      <rect x="65" y="35" rx="3" ry="3" width="60" height="7" />
      <rect x="0" y="80" rx="3" ry="3" width="512" height="100%" />
    </ContentLoader>
    <br />
    <br />
  </div>
)