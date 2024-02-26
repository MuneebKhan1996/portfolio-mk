import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from '../assets/3d/dragonOne.glb'
import { useEffect } from "react";


export default function Model({ isRotating, ...props }) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(scene);
    const { actions } = useAnimations(animations, group);
    console.log('actions :', actions);
    useEffect(() => {
        if (isRotating) {
            actions['Armature|ArmatureAction.001'].play();
        } else {
            actions['Armature|ArmatureAction.001'].stop();
        }
    }, [actions, isRotating])
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.223}
                >
                    <group
                        name="a71d942a539c47c997c5f037c9b46a75fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Dragon_low"
                                    position={[0, 98.356, -101.675]}
                                    rotation={[-1.004, 0, 0]}
                                    scale={100}
                                />
                                <group
                                    name="Armature"
                                    position={[0, 98.356, -101.675]}
                                    rotation={[-1.004, 0, 0]}
                                    scale={100}
                                >
                                    <group name="Object_6">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_9"
                                            geometry={nodes.Object_9.geometry}
                                            material={materials.Dragon}
                                            skeleton={nodes.Object_9.skeleton}
                                        />
                                        <group
                                            name="Object_8"
                                            position={[0, 98.356, -101.675]}
                                            rotation={[-1.004, 0, 0]}
                                            scale={100}
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/dragonOne.glb");

