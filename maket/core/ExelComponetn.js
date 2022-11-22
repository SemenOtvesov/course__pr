import { DomListener } from './DomListener.js'

export class ExelComponetn extends DomListener{
    constructor(el, option){
        super(el, option.listeners)
        this.name = option.name || ''

        this.prepare()
        this.emitter = option.emitter
        this.unSubs = []
    }

    prepare(){
        
    }

    $emit(event, arg){
        this.emitter.emit(event, arg)
    }

    $subscrube(event, fn){
        const unSub = this.emitter.subscrube(event, fn)
        this.unSubs.push(unSub)
    }

    init(){
        this.initDomListeners()
    }

    destroy(){
        this.unSubs.forEach(el=>el())
    }
}