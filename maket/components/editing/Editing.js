import {ExelComponetn} from '@core/ExelComponetn.js'
export class Editing extends ExelComponetn{
    static class = ['main__editing-box']

    toHTML(){
        return `<div class="main__editing-item">
        <img src="./icon/align-left.png" alt="">
    </div>
    <div class="main__editing-item">
        <img src="./icon/align-center.png" alt="">
    </div>
    <div class="main__editing-item">
        <img src="./icon/align-right.png" alt="">
    </div>
    <div class="main__editing-item">
        <img src="./icon/bold.png" alt="">
    </div>
    <div class="main__editing-item">
        <img src="./icon/italic.png" alt="">
    </div>
    <div class="main__editing-item">
        <img src="./icon/underline.png" alt="">
    </div>`
    }
}