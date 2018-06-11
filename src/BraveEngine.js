/*
* @author Tyler McKenzie
*/

/*
* World Building Objects
*/
const Game  = require("./objects/Game.js")
const State = require("./objects/State.js")

/*
* World Elements
*/
// const Physics2D from './elements/Physics2D.js'


/*
* Game Centered Objects
*/
const Sprite  = require("./objects/Sprite.js")
const Text    = require("./objects/Text.js")
const Graphic = require("./objects/Graphic.js")

const BraveEngine = {
  Game,
  State,
  Sprite,
  Text,
  Graphic
}

module.exports = BraveEngine
