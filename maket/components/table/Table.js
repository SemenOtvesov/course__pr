import {ExelComponetn} from '@core/ExelComponetn.js'
import { $ } from '@core/Dom.js'
import { TableSection } from './TableSection'
export class Table extends ExelComponetn{
    static class = ['main__fx-table', 'table']
    constructor(el, emit){
        super(el, {
            name: 'table', 
            listeners: ['mousedown', 'mouseup', 'keydown', 'input'],
            emitter: emit
        })
    }

    toHTML(quantityRows = 20, quantityCol = 45){
        this.$el.setAttribute('data-elem', 'table')
        const engAlp = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
        let stringCol = ''
        for(let i = 1; i< quantityCol; i++){
            let alpI = i
            if(i > 26){
                alpI = i-26
            }
            stringCol = `${stringCol}
            <div data-col="${i}" class="table__row-title copy-none">${engAlp[alpI - 1]}
                <div class="table__column-separator">
                    <div data-resize="column" class="separator-line__column"></div>
                </div>
            </div>`
        }
        return `<div class="table__fx-box">
                    <div class="table__fx-title copy-none">fx</div>
                    <input type="text" class="table__fx-input" id="fxInput">
                </div>
                <div class="table__fx-box">
                    <div class="table__fx-title copy-none"></div>
                    <div id="maxRow" class="table__row-box">
                    ${stringCol}
                    </div>
                </div>${this.createRows(quantityRows, quantityCol)}`
    }

    createRows(quantityRows, quantityCol){
        let stringRow = '' 

        const stringCol = (indexRow)=>{
            let string = ''
            for(let i = 0; i< quantityCol; i++){
                string = `${string} <div data-col="${i+1}" data-id="${indexRow+1}:${i+1}"
                 class="table__row-item"><textarea id="textarea" class="table__row-textarea"></textarea></div>`
            }
            return string
        }
        for(let i = 0; i<quantityRows; i++){
            const $element = `<div class="table__fx-box">
            <div class="table__fx-title copy-none">${i + 1}
                <div style="" class="table__row-separator">
                    <div class="separator-line__row"></div>
                </div>
            </div>
            <div class="table__row-box">
                ${stringCol(i)}
            </div>
            </div>`
            stringRow = `${stringRow} ${$element}`
        }
        return stringRow
    }

    moveX(target){
        const startpos = Math.round(target.parentElement.getBoundingClientRect().left);

        let positionSeparator = event.pageX - startpos
        if(positionSeparator<40){positionSeparator = 40}
        target.style.cssText = `left: ${positionSeparator-4 +'px'}`

        this.SeparatorX = target
        this.widthSeparatorX = positionSeparator
    }

    moveY(target){
        const startpos = Math.round(target.parentElement.getBoundingClientRect().top);

        let positionSeparator = event.pageY - startpos
        if(positionSeparator<40){positionSeparator = 40}
        target.style.cssText = `top: ${positionSeparator-4 +'px'}`

        this.SeparatorY = target
        this.widthSeparatorY = positionSeparator
    }

    onMousedown(){
        const target = event.target

        if(target.className === 'table__column-separator'){
            this.removeFunctionTableX = this.moveX.bind(this, event.target)
            document.addEventListener('mousemove', this.removeFunctionTableX)
        }

        if(target.className === 'table__row-separator'){
            this.removeFunctionTableY = this.moveY.bind(this, target)
            document.addEventListener('mousemove', this.removeFunctionTableY)
        }


        if((event.ctrlKey)&&(target.dataset.id)){
            this.Sections.selectGroup(target, this.$el)
        }else if((event.ctrlKey)&&(target.parentElement.dataset.id)){
            this.Sections.selectGroup(target.parentElement, this.$el)
        }else if(target.dataset.id){
            this.Sections.select(target)
        }else if(target.parentElement.dataset.id){
            this.Sections.select(target.parentElement)
        }
    }

    onMouseup(){
        if(this.widthSeparatorX){
            const colList = this.$el.querySelectorAll(`[data-col="${this.SeparatorX.parentElement.dataset.col}"`) 
            colList.forEach(el=>{el.style.cssText = `flex: 0 0 ${this.widthSeparatorX+4+'px'}`})
            if(this.widthSeparatorX === 40){
                this.SeparatorX.style.cssText = 'left: 86%'
            }
        }
        if(this.widthSeparatorY){
            this.SeparatorY.parentElement.style.cssText = `height: ${this.widthSeparatorY+'px'}`
            this.SeparatorY.parentElement.parentElement.style.cssText = `height: ${this.widthSeparatorY+2+'px'}`
            this.SeparatorY.style.cssText = `top: ${this.SeparatorY.style.top.replace('px', '')-2+ 'px'}`
            if(this.widthSeparatorY === 40){
                this.SeparatorY.style.cssText = 'top: 80%'
            }
        }

        document.removeEventListener('mousemove', this.removeFunctionTableX)
        document.removeEventListener('mousemove', this.removeFunctionTableY)
    }

    #keydownFn(cells, {paramRow, paramCol}){
        let [row, col] = event.target.parentElement.dataset.id.split(':');

        cells.forEach(el=>{
            if(el.dataset.id === `${+row + paramRow}:${+col + paramCol}`){
                this.Sections.select(el)
            }
        })
    }

    onKeydown(event){
        const target = event.target;
        const cells = this.$el.querySelectorAll('[data-id]')

        if((target.dataset.id)||(target.parentElement.dataset.id)){
            if(event.code === 'Tab'){
                event.preventDefault()
                this.Sections.select(event.target.parentElement.nextElementSibling)
            }
    
            if((event.code === 'Enter')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:1, paramCol: 0})}
            
            if((event.code === 'ArrowUp')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:-1, paramCol: 0})}
            if((event.code === 'ArrowDown')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:1, paramCol: 0})}
            if((event.code === 'ArrowLeft')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:0, paramCol: -1})}
            if((event.code === 'ArrowRight')&&(!event.shiftKey)){this.#keydownFn(cells, {paramRow:0, paramCol: 1})}
        }

        if((event.code === 'Enter')&&(target.id === 'fxInput')){
            event.preventDefault()
            this.Sections.selected()[0].firstElementChild.focus()
        }
    }

    onInput(event){
        if(event.target.id === 'fxInput'){
            this.$emit('fxInput', event.target.value)
        }
        if(event.target.id === 'textarea'){
            this.$emit('textareaInput', event.target.value)
        }
    }

    prepare(){
        this.Sections = new TableSection(this.$el)
    }

    init(){
        const section = this.$el.querySelector('[data-id="1:1"]')
        this.Sections.select(section)

        super.init()

        this.$subscrube('fxInput', (el)=>this.Sections.selected().forEach(selectEl=>{
            selectEl.firstElementChild.value = el
        }))
        this.$subscrube('textareaInput', (el)=>this.$el.querySelector('#fxInput').value = el)
    }
}
