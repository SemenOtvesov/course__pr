import {ExelComponetn} from '@core/ExelComponetn.js'
export class File extends ExelComponetn{
    static class = ['main__file-box'];
    constructor(el, emit, store){
        super(el, {
            name: 'table', 
            listeners: ['input'],
            emitter: emit,
            store
        })
    }
    toHTML(){
        const state = JSON.parse(localStorage.getItem('state')) || {}
        let titileValue
        if(state.resTableTitle){titileValue = state.resTableTitle}

        return `<input type="text" value="${titileValue || 'Новая таблица'}" class="main__file-name">
        <div class="main__file-del/exBox">
            <button class="main__file-delete">
                <img src="./icon/trash.png" alt="">
            </button>
            <button class="main__file-exit">
                <img src="./icon/exit.png" alt="">
            </button>
        </div>`
    }

    onInput(event){
        this.dispatch({type:'resTableTitle', data: event.target.value})
    }
}