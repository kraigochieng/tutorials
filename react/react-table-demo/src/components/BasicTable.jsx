import React, { useMemo } from 'react'
import { useFilters, useGlobalFilter, useSortBy, useTable } from 'react-table'
import { GROUPED_COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import './Table.css'
import GlobalFilter from './GlobalFilter'

export default function BasicTable() {

    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data
    },useFilters, useGlobalFilter, useSortBy)

    const {globalFilter} = state
    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                                            {header.render('Header')}
                                            <span>
                                                {header.isSorted ? (header.isSortedDesc ? <span> &#8595;</span> : <span> &#8593;</span> ) : ''}
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)

                            return(
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    {
                        footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map(footer => (
                                        <th {...footer.getFooterProps()}>{footer.render('Footer')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot>
            </table>

        </>
    )
}
