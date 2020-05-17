import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import dude from '@/game/assets/dude.png'
import platform from '@/game/assets/platform.png'
import star from '@/game/assets/star.png'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.image('bomb', dude)
    this.load.image('bomb', platform)
    this.load.image('bomb', star)
  }

  create () {
    this.scene.start('PlayScene')
  }
}