// import RevalidateButton from "./revalidate-button";

import { notFound } from "next/navigation";
import RevalidateButton from "./revalidate-button";
import Test from "./test";
import { Suspense } from "react";

const Profile =  () => {
    // const res = await fetch(
    //     // We intentionally delay the response to simulate a slow data
    //     // request that would benefit from `loading.js`
    //     `https://app-playground-api.vercel.app/api/categories?delay=1000&slug=electronics`,
    //     {
    //       // We intentionally disable Next.js Cache to better demo
    //       // `loading.js`
    //       cache: 'no-cache',
    //     },
    //   );
    
    //   if (!res.ok) {
    //     // Render the closest `error.js` Error Boundary
    //     throw new Error('Something went wrong!');
    //   }
    
    //   const category = (await res.json()) as any;
    
    //   if (!category) {
    //     // Render the closest `not-found.js` Error Boundary
    //     notFound();
    //   }
    return <>
    <h1>profile page</h1>

    {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <h1 key={i} >{i}</h1>
        ))}
      </div> */}
      <Suspense fallback={<p>Loading ...</p>}>
      <Test/>
      </Suspense>
    <RevalidateButton/>
    </>
}

export default Profile;