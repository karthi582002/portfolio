import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../Component/HackerRoom.jsx";
import CanvasLoader from "../Component/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constant/index.js";
import Target from "../Component/Target.jsx";
import ReactLogo from "../Component/ReactLogo.jsx";
import Rings from "../Component/Rings.jsx";
import Cube from "../Component/Cube.jsx";
import HeroCamera from "../Component/HeroCamera.jsx";
import Button from "../Component/Button.jsx";

const Hero = () => {
    // const isMobile = useMediaQuery({maxWidth: 480})
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth:768,maxWidth: 1024})
    const size = calculateSizes(isSmall,isMobile,isTablet)
    // const isTablet = useMediaQuery({maxWidth: 1024})


    return (
        <section className={"min-h-screen w-full flex flex-col relative"} id={"home"}>
            <div
                className={"w-full mx-auto flex flex-col sm:mt-28 mt-20 c-space gap-3"}
            >
                    <p
                        className={"sm:text-3xl text-2xl font-semibold text-white font-medium text-center font-generalsans"}
                    >
                        Hi, I'm Karthikeyan <span
                        className={"waving-hand"}
                    >👋🏽</span>
                    </p>
                    <p
                        className={"hero_tag text-gray_gradient"}
                    >
                        Building Products & Services <span className={"hidden sm:block"}>that are <span className={"text-primary"}>User-centric</span> and <span className={"text-primary"}>User-friendly</span> </span>
                    </p>
            </div>
            <div
                className={"w-full h-full absolute inset-0"}
            >
                        {/*<Leva />*/}
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HeroCamera>
                            <HackerRoom
                                // scale={[x.scale, x.scale, x.scale]}
                                // position = {[x.positionX, x.positionY, x.positionZ]}
                                // rotation = {[x.rotationX, x.rotationY, x.rotationZ]}
                                scale={size.deskScale}
                                position = {size.deskPosition}
                                // rotation = {[0.3, isMobile ? 3 : 2.8, 0.0]}
                                rotation = {[0.3, isMobile ? 3 : -Math.PI, 0.0]}
                            />
                        </HeroCamera>
                        <group>
                            <Target position={size.targetPosition}/>
                            <ReactLogo position={size.reactLogoPosition}/>
                            <Rings position={size.ringPosition} />
                            <Cube position={size.cubePosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className={"absolute bottom-4 left-0 right-0 w-full z-10 c-space"}>
                <a href={"#contact"} className={"w-fit"}>
                    <Button name={"Let's work together"} isBeam containerClassName={"sm:w-fit w-full sm:min-w-96"}/>
                </a>

            </div>

        </section>
    )
}
export default Hero
