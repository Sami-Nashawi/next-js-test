import { Suspense } from "react";
import Fsdf from "./f";

const RandomImage =  () => {
    return <>
    <h1>image page</h1>
    <Suspense fallback={<p>Fetching Image...</p>}>
        <Fsdf/>
    </Suspense>
    </>
}

export default RandomImage;