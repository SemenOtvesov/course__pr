import {ExelComponetn} from '@core/ExelComponetn.js'
import { $ } from '@core/Dom.js'
export class Table extends ExelComponetn{
    static class = ['main__fx-table', 'table']

    toHTML(quantityRows = 8, quantityCol = 42){
        let stringCol = ''
        for(let i = 1; i< quantityCol; i += 3){
            stringCol = `${stringCol} <div class="table__row-title">A</div><div class="table__row-title">B</div><div class="table__row-title">C</div>`
        }
        return `<div class="table__fx-box">
                    <div class="table__fx-title">fx</div>
                    <input type="text" class="table__fx-input" name="" id="">
                </div>
                <div class="table__fx-box">
                    <div class="table__fx-title"></div>
                    <div id="maxRow" class="table__row-box">
                    ${stringCol}
                    </div>
                </div>${this.createRows(quantityRows, quantityCol)}`
    }
    createRows(quantityRows, quantityCol){
        let stringRow = '' 
        let stringCol = ''
        for(let i = 0; i< quantityCol; i++){
            stringCol = `${stringCol} <div class="table__row-item"></div>`
        }
        for(let i = 0; i<quantityRows; i++){
            const $element = `<div class="table__fx-box">
            <div class="table__fx-title">${i + 1}</div>
            <div class="table__row-box">
                ${stringCol}
            </div>
            </div>`
            stringRow = `${stringRow} ${$element}`
        }
        return stringRow
    }
}