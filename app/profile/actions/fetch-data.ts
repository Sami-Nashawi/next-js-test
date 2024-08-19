'use server'

export async function fetchData() {
    const res = await fetch(
        // We intentionally delay the response to simulate a slow data
        // request that would benefit from `loading.js`
        `https://app-playground-api.vercel.app/api/categories?delay=1000&slug=electronics`,
        {
          // We intentionally disable Next.js Cache to better demo
          // `loading.js`
          cache: 'no-cache',
        },
      );
    
      return await res.json();
}