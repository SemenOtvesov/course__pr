export function rootReduser(state, action){
    if(action.type === 'colResize'){
        if(!state.colResize){
            state.colResize = [action.data]
        }else{
            const checkNumCol = state.colResize.find(element=>action.data.exId === element.exId)

            if(checkNumCol){
                checkNumCol.widthCol = action.data.widthCol
            }else{state.colResize.push(action.data)}
        }
    }

    if(action.type === 'rowResize'){
        if(!state.rowResize){
            state.rowResize = [action.data]
        }else{
            const checkNumCol = state.rowResize.find(element=>action.data.exId === element.exId)

            if(checkNumCol){
                checkNumCol.widthRow = action.data.widthRow
            }else{state.rowResize.push(action.data)}
        }
    }

    if(action.type === 'exStateValue'){
        if(!state.exStateValue){
            state.exStateValue = action.data
        }else{
            action.data.forEach(element => {
                const checkExId = state.exStateValue.find(ex=>element.exId === ex.exId)

                if(checkExId){
                    if(element.value[0] === '='){
                        const fn = element.value.slice(1)
                        const rez = eval(fn)
                        if(rez){
                            checkExId.value = rez
                            checkExId.inputValue = element.value
                        }
                    }else{
                        checkExId.value = element.value
                    }
                }else{
                    state.exStateValue.push(element)
                }
            });
        }
    }

    if(action.type === 'exStateEdit'){
        console.log(action)
        if(!state.exStateEdit){
            state.exStateEdit = action.data
        }else{
            action.data.forEach(element=>{
                const checkStateEdit = state.exStateEdit.find(ex=>element.exId === ex.exId)

                if(checkStateEdit){
                    if(element.posType){checkStateEdit.posType = element.posType}
    
                    if(element.boldType){checkStateEdit.boldType = element.boldType}
                    if(element.italicType){checkStateEdit.italicType = element.italicType}
                    if(element.underLineType){checkStateEdit.underLineType = element.underLineType}

                }else{state.exStateEdit.push(element)}
            })
        }
    }

    if(action.type === 'deleteEditEl'){
        console.log(action.data)
        action.data.forEach(element=>{
            const checkStateEdit = state.exStateEdit.find(ex=>element.exId === ex.exId)

            if(checkStateEdit){
                delete checkStateEdit[element.deleteElement]
            }
        })
    }

    if(action.type === 'resSelectEl'){
        state.resSelectEl = action.data
    }
    
    if(action.type === 'resTableTitle'){
        state.resTableTitle = action.data
    }

    return state
}