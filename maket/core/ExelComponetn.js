import { DomListener } from './DomListener.js'

export class ExelComponetn extends DomListener{
    constructor(el, option){
        super(el, option.listeners)
        this.name = option.name || ''
    }

    init(){
        this.initDomListeners()
    }
}