import '@maket/css/style.css'
import { Excel } from '@components/excel/Excel'
import { Editing } from '@components/editing/Editing'
import { Table } from '@components/table/Table'
import { File } from '@components/file/File'
import {ExelComponetn} from '@core/ExelComponetn.js'

import { createStore } from '@core/createStore'
import { rootReduser } from '@maket/rootReduser/rootReduser'

const store = createStore(rootReduser)

const excel = new Excel('#wrap', {
    components: [File, Editing, Table],
    store
})

excel.render()