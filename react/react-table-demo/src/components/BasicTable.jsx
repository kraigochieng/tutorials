import React, { useMemo } from 'react'
import { useFilters, useGlobalFilter, usePagination, useSortBy, useTable, useRowSelect, useColumnOrder } from 'react-table'
import { idColumn, firstNameColumn, lastNameColumn, phoneColumn, countryColumn, dateOfBirthColumn, COLUMNS, GROUPED_COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import './Table.css'
import GlobalFilter from './GlobalFilter'
import ColumnFilter from './ColumnFilter'
import { CheckBox } from './CheckBox'

export default function BasicTable() {
    const columns = useMemo(() => COLUMNS, [])

    const data = useMemo(() => MOCK_DATA, [])

    const defaultColumn = useMemo(() => ({
        Filter: ColumnFilter
    }), [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // footerGroups,
        rows,
        page,
        nextPage,
        previousPage,
        canNextPage,
        pageOptions,
        canPreviousPage,
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter,
        setPageSize,
        selectedFlatRows,
        setColumnOrder,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        useColumnOrder,
        (hooks) => {
            hooks.visibleColumns.push((columns) => [
                {
                    id: 'selection', 
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <CheckBox {...getToggleAllRowsSelectedProps()}/>
                    ),
                    Cell: ({ row }) => (
                        <CheckBox {...row.getToggleRowSelectedProps()} />
                    ),
                },
                ...columns,]
            )
        }
    )

    const {globalFilter, pageIndex, pageSize } = state

    const firstPageRows = rows.slice(0,10) // this will go where page or row is

    function changeOrder() {
        setColumnOrder([
            idColumn.accessor,
            firstNameColumn.accessor,
            lastNameColumn.accessor,
            phoneColumn.accessor,
            dateOfBirthColumn.accessor,
            countryColumn.accessor
        ])
    }
    return (
        <>
            <div>
                <div>
                    <CheckBox {...getToggleHideAllColumnsProps()}/> Toggle
                </div>
                {
                    allColumns.map(column => (
                        column.id !== 'selection' &&
                        <div key={column.id}>
                            <input id={column.id}type='checkbox' {...column.getToggleHiddenProps()}/>
                            <label htmlFor={column.id}>{column.Header}</label>
                        </div>
                    ))
                }
            </div>
            <button onClick={changeOrder}>Change Order</button>
            <select value={pageSize} onChange={event => setPageSize(Number(event.target.value))}>
                {
                    [10, 25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>Show {pageSize} pages</option>
                    ))
                }
            </select>
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
                                                {header.isSorted ? 
                                                (header.isSortedDesc ? <span> &#8595;</span> : <span> &#8593;</span>) : 
                                                ''}
                                            </span>
                                            {
                                                header.canFilter ? <div>{header.render('Filter')}</div> : null
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        firstPageRows.map(row => {
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
                {/* <tfoot>
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
                </tfoot> */}
            </table>
            <div>
                {
                    canPreviousPage ? <button onClick={() => gotoPage(0)}>First Page</button> : null
                }
                {
                    canPreviousPage ? <button onClick={() => previousPage()}>Previous</button> : null
                }
                <span>
                    {pageIndex + 1} of {pageOptions.length}
                </span>
                {
                    canNextPage ? <button onClick={() => nextPage()}>Next</button> : null
                }
                {
                    canNextPage ? <button onClick={() => gotoPage(pageCount - 1)}>Last Page</button> : null
                }
                {
                    <input type="number" defaultValue={pageIndex + 1} onChange={(event) => {
                        const pageNumber = event.target.value ? Number(event.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}/>
                }
            </div>
            <pre>
                <code>
                    {
                        JSON.stringify(
                            {
                            selectedFlatRows: selectedFlatRows.map(row => row.original),
                            },
                            null,
                            2
                        )
                    }
                </code>
            </pre>
        </>
    )
}
