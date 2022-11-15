class createEl{
    constructor(el){
        this.$el = el
    }

    HTML(content){
        this.$el.innerHTML = content;
        return this
    }

    append(parent){
        parent.append(this.$el)
    }
}

export function $(element, classes){
    return new createEl(element, classes)
}
$.create = (element, classes)=>{
    const el = document.createElement(`${element}`);
    if(classes){el.classList.add(...classes)}
    return $(el)
}