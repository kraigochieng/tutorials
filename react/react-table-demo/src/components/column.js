export function COLUMN(Header, accessor) {
    return {
        Header: Header,
        Footer: Header, // This is beacause header and footer shall have same name
        accessor: accessor
    }
}

export function GROUPED_COLUMN(Header, columns) {
    return {
        Header: Header,
        Footer: Header, // This is beacause header and footer shall have same name
        columns: columns
    }
}