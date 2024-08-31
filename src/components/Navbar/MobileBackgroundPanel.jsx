import React from 'react'

const MobileBackgroundPanel = ({ onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-black opacity-70 z-20"
      onClick={onClick}
    />
  )
}

export default MobileBackgroundPanel