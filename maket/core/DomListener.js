export class DomListener{
    constructor($el){
        this.$el = $el
    }
    //возвращает шаблон элемента
    on(typeListener, element, callBackFunc){
        element.addEventListener(typeListener, callBackFunc)
    }
    off(typeListener, element, callBackFunc){
        element.removeEventListener(typeListener, callBackFunc)
    }
}