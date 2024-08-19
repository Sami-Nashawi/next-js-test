import { Suspense } from "react";
import Fsdf from "./f";
import { unstable_noStore } from "next/cache";
export const dynamic = 'force-dynamic';
const RandomImage =  () => {
    unstable_noStore()

    return <>
    <h1>image page</h1>
    <Suspense fallback={<p>Fetching Image...</p>}>
        <Fsdf/>
    </Suspense>
    </>
}

export default RandomImage;