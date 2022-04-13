/*
  export default nos permite exportar esta clase e importarla como

  import MyLogger from './logger.js'
*/

export default class Logger {
    constructor (name) {
      this.name = name
    }
  
    logic (message) {
      console.log(`[${this.name}] ${message}`)
    }
  }