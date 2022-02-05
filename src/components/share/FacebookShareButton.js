import React, { useEffect } from 'react'

const FacebookShareButton = () => {
  return (
    <div
      className="fb-share-button mr-4"
      data-href="http://public-view.kr"
      data-layout="button_count"
    >
      <button id="facebookr-link-btn">
        <img src="/icons/facebook.png" alt="facebook-share-icon" />
      </button>
    </div>

    // <div className="facebook-share-button mr-4">
    //   <button id="facebookr-link-btn">
    //     <img src="/icons/facebook.png" alt="facebook-share-icon" />
    //   </button>
    // </div>
  )
}

export default FacebookShareButton
