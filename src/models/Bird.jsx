import React, { useEffect, useRef } from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

const Bird = () => {
    const birdRef = useRef()

    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef)

    useFrame(({ clock, camera }) => {
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        if (birdRef.current.position.x > camera.position.x + 20) {
            birdRef.current.rotation.y = Math.PI
        } else if (birdRef.current.position.x < camera.position.x - 8) {
            birdRef.current.rotation.y = 0
        }


        // Update the X and Z positions based on the direction
        if (birdRef.current.rotation.y === 0) {
            // Moving forward
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            // Moving backward
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    })

    useEffect(() => {
        actions['Take 001'].play();
    }, [actions])

    return (
        <mesh ref={birdRef} position={[-2, 0, 1]} scale={[0.002, 0.002, 0.002]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird