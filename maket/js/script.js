import '@maket/css/style.css'
import { Excel } from '@components/excel/Excel'
import { Editing } from '@components/editing/Editing'
import { Table } from '@components/table/Table'
import { File } from '@components/file/File'

const excel = new Excel('#wrap', {
    components: [File, Editing, Table]
})

excel.render()