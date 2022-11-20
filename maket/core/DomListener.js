import { capitalize } from "./utils";

export class DomListener{
    constructor(el, listeners, targetTable = ''){
        this.$el = el.$el
        this.listners = listeners
    }

    initDomListeners(){
        this.listners.forEach(element => {
            const func = this['on' + capitalize(element)]
            if(!func){throw new Error(`ошибка -- в ${this.name}(нет функции)`) }
            this.$el.addEventListener(element, func.bind(this))
        });
    }
    removeDomListeners(){
        this.listners.forEach(element => {
            const func = this['off' + capitalize(element)]
            if(!func){throw new Error(`ошибка -- в ${this.name}(нет функции)`) }
            this.$el.removeEventListener(element, func.bind(func))
        });
    }
}