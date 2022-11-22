export class TableSection{
    constructor(table){
        this.sections = []
        this.oldElem = null
        this.table = table
    }

    select($el){
        const input =  this.table.querySelector('#fxInput')
        input.value = $el.firstElementChild.value
        
        this.sections.forEach(el=>el.classList.remove('selected'))
        this.sections = []

        if(!this.sections.find(el=>el === $el)){
            this.sections.push($el)
        }

        this.oldElem = $el
        $el.classList.add('selected')

        $el.firstElementChild.focus()
    }

    selectGroup($el, table){
        this.sections.forEach(el=>el.classList.remove('selected'))

        let [gapStartCol, gapStartRow] = this.oldElem.dataset.id.split(":")
        let [gapEndCol, gapEndRow] = $el.dataset.id.split(":")


        if(+gapStartCol > +gapEndCol){
            let variable = gapStartCol;
            gapStartCol = gapEndCol;
            gapEndCol = variable
        }
        if(+gapStartRow> +gapEndRow){
            let variable = gapStartRow;
            gapStartRow = gapEndRow;
            gapEndRow = variable
        }

        const $sections = table.querySelectorAll('[data-id]')
        $sections.forEach(el=>{
            const [elCol, elRow] = el.dataset.id.split(':')
            if((+elCol >= +gapStartCol)&&(+elCol <= +gapEndCol)){
                if((+elRow >= +gapStartRow)&&(+elRow <= +gapEndRow)){
                    el.classList.add('selected')
                    this.sections.push(el)
                }
            }
        })
        this.oldElem = $el
    }

    selected(){
        return this.sections
    }
}