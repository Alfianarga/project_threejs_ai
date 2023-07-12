import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './fraxbit-logo-bot.png',
    fullDecal: './fraxbit-logo-bot.png',
})

export default state