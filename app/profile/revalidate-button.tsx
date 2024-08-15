"use client"
import { revalidate } from "./actions/revalidate";

const RevalidateButton = () => {
    const onRavalidate = () => {
        revalidate()
    }
    return <button onClick={onRavalidate}>Revalidate</button>
}

export default RevalidateButton;