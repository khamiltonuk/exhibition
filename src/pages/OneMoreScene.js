import React from "react"
import { Canvas } from "react-three-fiber"

const OneMoreScene = function () {
  return (
    <Canvas>
      <ambientLight />
      <mesh
        visible
        userData={{ hello: "world" }}
        position={[1, 2, 3]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial attach="material" color="hotpink" transparent />
      </mesh>
    </Canvas>
  )
}

export default OneMoreScene
