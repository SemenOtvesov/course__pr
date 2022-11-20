import {ExelComponetn} from '@core/ExelComponetn.js'
export class File extends ExelComponetn{
    static class = ['main__file-box'];
    constructor(el){
        super(el, {
            name: 'table', 
            listeners: []
        })
    }
    toHTML(){
        return `<input type="text" value="Новая таблица" class="main__file-name">
        <div class="main__file-del/exBox">
            <button class="main__file-delete">
                <img src="./icon/trash.png" alt="">
            </button>
            <button class="main__file-exit">
                <img src="./icon/exit.png" alt="">
            </button>
        </div>`
    }
}

function nice(){
    console.log('remove',this.$el)
}