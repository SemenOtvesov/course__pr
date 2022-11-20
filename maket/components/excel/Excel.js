import { $ } from "@core/Dom";

export class Excel{
    constructor(idWrap, options){
        this.$wrap = document.querySelector(idWrap);
        this.components = options.components
    }

    render(){
        let i = 0;
        this.components = this.components.map(Comp => {
            const el = $.create('div', Comp.class)
            const comp = new Comp(el)
            el.HTML(comp.toHTML()).append(this.$wrap).ajStyleSeparator()

            return comp
        });

        this.components.forEach(element => {
            element.init()
        });
    }
}
