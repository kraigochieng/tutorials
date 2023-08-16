import { useOutletContext, useParams } from "react-router-dom"

export default function Book() {
    const { id } = useParams()
    const { hello } = useOutletContext()
    return (
        <>
            <h1>Book {id}</h1>
            <p>book {id} details</p>
            <p>Context: { hello }</p>
        </>
    )
}