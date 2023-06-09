import createParticleArray from "./createParticleArray.js";
import setCanvasDimensions from "./setCanvasDimensions.js";
import addParticleLines from "./addParticleLines.js";
import addParticles from "./addParticles.js";
import canvasConfig from "../canvasConfig.js";
import addLinesOnMouseMove from "./addLinesOnMouseMove.js";
import getMousePosition from "./getMousePosition.js";



const drawCanvas = () => {

    const particleArray = createParticleArray(canvasConfig.canvas.pixelsPerParticle)
    const canvas = document.getElementById('canvas')
    const canvasContext = canvas.getContext("2d");
    const mousePosition = getMousePosition()

    const runAnimation = () => {
        setCanvasDimensions()
        addParticles(particleArray, canvasContext)
        addParticleLines(particleArray, canvasContext)
        addLinesOnMouseMove(mousePosition, particleArray, canvasContext)
        window.requestAnimationFrame(runAnimation)
    }
    runAnimation()

}

export default drawCanvas