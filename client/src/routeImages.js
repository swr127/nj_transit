import atlanticCity from './images/atlantic-city-icon.png'
import mainBergen from './images/main-bergen-icon.png'
import montclair from './images/montclair-icon.png'
import morrisEssex from './images/morris-essex-icon.png'
import northJersey from './images/north-jersey-icon.png'
import northeatCorridor from './images/northeast-corridor-icon.png'
import pasackValley from './images/pascack-valley-icon.png'
import raritanValley from './images/raritan-valley-icon.png'

const routeImages = {
    1: atlanticCity,
    2: mainBergen,
    3: montclair,
    4: morrisEssex,
    5: northJersey,
    6: northeatCorridor,
    7: pasackValley,
    8: raritanValley
}

export const routeImageByID = (routeId) =>
{
    return routeImages[routeId]
}