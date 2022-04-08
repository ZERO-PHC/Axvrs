/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Sirhaian (https://sketchfab.com/sirhaian)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/energy-sphere-d3c2a8e291604dd4b41bdd7d295e1c90
title: Energy Sphere
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.glb')
  const { actions } = useAnimations(animations, group)

  // Change animation when the index changes
  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    console.log('actions', actions['Take 001'].play())
    actions['Take 001'].play()
    // actions[].reset().fadeIn(0.5).play()
    // In the clean-up phase, fade it out
    // return () => actions[names[index]].fadeOut(0.5)
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Booma_1fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="pSphere1">
                  <mesh
                    name="pSphere1_Clouds_01_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere1_Clouds_01_0.geometry}
                    material={nodes.pSphere1_Clouds_01_0.material}
                  />
                </group>
                <group name="pSphere2">
                  <mesh
                    name="pSphere2_Insides_01_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere2_Insides_01_0.geometry}
                    material={nodes.pSphere2_Insides_01_0.material}
                  />
                </group>
                <group name="pSphere3">
                  <mesh
                    name="pSphere3_Clouds_01_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere3_Clouds_01_0.geometry}
                    material={nodes.pSphere3_Clouds_01_0.material}
                  />
                </group>
                <group name="pSphere4" scale={1.5}>
                  <mesh
                    name="pSphere4_Insides_01_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere4_Insides_01_0.geometry}
                    material={nodes.pSphere4_Insides_01_0.material}
                  />
                </group>
                <group name="pSphere5">
                  <mesh
                    name="pSphere5_Insides_01_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere5_Insides_01_0.geometry}
                    material={nodes.pSphere5_Insides_01_0.material}
                  />
                </group>
                <group name="pSphere6">
                  <mesh
                    name="pSphere6_Clouds_01_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere6_Clouds_01_0.geometry}
                    material={nodes.pSphere6_Clouds_01_0.material}
                  />
                </group>
                <group name="pSphere7" scale={1.43575907}>
                  <mesh
                    name="pSphere7_Insides_01_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere7_Insides_01_0.geometry}
                    material={nodes.pSphere7_Insides_01_0.material}
                  />
                </group>
                <group name="pPlane17" scale={1.10000002}>
                  <mesh
                    name="pPlane17_Glow_01_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane17_Glow_01_0.geometry}
                    material={materials.Glow_01}
                  />
                </group>
                <group name="pPlane18" scale={0.40210605}>
                  <mesh
                    name="pPlane18_Glow_02_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane18_Glow_02_0.geometry}
                    material={materials.Glow_02}
                  />
                </group>
                <group name="pSphere8" scale={0.86261863}>
                  <mesh
                    name="pSphere8_Clouds_01_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere8_Clouds_01_0.geometry}
                    material={nodes.pSphere8_Clouds_01_0.material}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.glb')
