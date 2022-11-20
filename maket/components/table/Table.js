import {ExelComponetn} from '@core/ExelComponetn.js'
import { $ } from '@core/Dom.js'
export class Table extends ExelComponetn{
    static class = ['main__fx-table', 'table']
    constructor(el){
        super(el, {
            name: 'table', 
            listeners: ['mousedown', 'mouseup']
        })
    }

    toHTML(quantityRows = 8, quantityCol = 45){
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
                    <input type="text" class="table__fx-input" name="" id="">
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
        let stringCol = ''
        for(let i = 0; i< quantityCol; i++){
            stringCol = `${stringCol} <div data-col="${i+1}" class="table__row-item"></div>`
        }
        for(let i = 0; i<quantityRows; i++){
            const $element = `<div class="table__fx-box">
            <div class="table__fx-title copy-none">${i + 1}
                <div style="" class="table__row-separator">
                    <div class="separator-line__row"></div>
                </div>
            </div>
            <div class="table__row-box">
                ${stringCol}
            </div>
            </div>`
            stringRow = `${stringRow} ${$element}`
        }
        return stringRow
    }

    moveX(target){
        const startpos = Math.round(target.parentElement.getBoundingClientRect().left);

        const positionSeparator = event.pageX - startpos
        if(positionSeparator<40){positionSeparator = 40}
        target.style.cssText = `left: ${positionSeparator-4 +'px'}`

        this.SeparatorX = target
        this.widthSeparatorX = positionSeparator
    }

    moveY(target){
        const startpos = Math.round(target.parentElement.getBoundingClientRect().top);

        const positionSeparator = event.pageY - startpos
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
    }

    onMouseup(){
        if(this.widthSeparatorX){
            const colList = this.$el.querySelectorAll(`[data-col="${this.SeparatorX.parentElement.dataset.col}"`) 
            colList.forEach(el=>{el.style.cssText = `flex: 0 0 ${this.widthSeparatorX+4+'px'}`})
            this.SeparatorX.style.cssText = 'left: 86%'
        }
        if(this.widthSeparatorY){
            console.log(this.SeparatorY.parentElement, this.widthSeparatorY)
            this.SeparatorY.parentElement.style.cssText = `height: ${this.widthSeparatorY+'px'}`
            this.SeparatorY.style.cssText = 'top: 88%'
        }

        document.removeEventListener('mousemove', this.removeFunctionTableX)
        document.removeEventListener('mousemove', this.removeFunctionTableY)
    }
}
