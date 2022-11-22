import { $ } from "@core/Dom";
import { Emitter } from "@core/Emitter";

export class Excel{
    constructor(idWrap, options){
        this.$wrap = document.querySelector(idWrap);
        this.components = options.components
        this.Emitter = new Emitter()
    }

    render(){
        const emitter = this.Emitter

        let i = 0;
        this.components = this.components.map(Comp => {
            const el = $.create('div', Comp.class)
            const comp = new Comp(el, emitter)
            el.HTML(comp.toHTML()).append(this.$wrap).ajStyleSeparator()

            return comp
        });

        this.components.forEach(element => {
            element.init()
        });
    }

    destroy(){
        this.components.forEach(element => element.destroy());
    }
}
