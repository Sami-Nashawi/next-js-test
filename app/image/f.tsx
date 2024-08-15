import Image from "next/image";

const fetchImage =async()=> {
const res = await fetch('https://dog.ceo/api/breeds/image/random',
    {
        // We intentionally disable Next.js Cache to better demo
        // `loading.js`
        cache: 'no-cache',
      },

)
const data = await res.json()
return data;
}
const Fsdf = async () => {
    const data = await fetchImage()
    return <>
    <Image src={data?.message} alt="image" width={500} height={200} />
    </>
}

export default Fsdf;