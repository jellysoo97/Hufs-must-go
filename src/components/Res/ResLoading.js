import React from "react"
import ScaleLoader from "react-spinners/ScaleLoader"

function ResLoading() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ScaleLoader
          color="#152f54"
          height={35}
          width={4}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  )
}

export default ResLoading
