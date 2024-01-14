import { Link, useSearchParams } from "react-router-dom"

export default function BookList() {
    const [searchParams, setSearchParams] = useSearchParams({x: 7})

    const numbers = [1,2,3,4,5,6,7]

    return (
        <>
            <h1>BookList</h1>
            {numbers.map(number => (
                <p><Link to={`/books/${number}`}>{number}</Link></p>)
                )}
            <p><Link>Dynamic Book {searchParams.get("x")}</Link></p>
        </>

    )
}