import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../features/user/userSlice"

export default function UserList() {
    const users = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
  return (
    <>
      {users.loading && <p>Loading...</p>}
      {!users.loading && users.error ? <p>{users.error}</p> :null}
      {!users.loading && users.data.length > 0 ? <div>{users.data.map(user => <p key={user.id}>{user.id}</p>) }</div> : null}
    </>

  )
}
