import { useDispatch, useSelector } from "react-redux"
import { cakeActions } from "../features/cake/cakeSlice"

export default function Cake() {
    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Number of cakes: {numberOfCakes}</h1>
        <button onClick={() => dispatch(cakeActions.ordered(1))}>Order Cake</button>
        <button onClick={() => dispatch(cakeActions.restocked(1))}>Restock Cake</button>
    </div>
  )
}
