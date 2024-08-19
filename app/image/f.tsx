import { unstable_noStore } from "next/cache";
import Image from "next/image";

const fetchImage =async()=> {
const res = await fetch('https://dog.ceo/api/breeds/image/random',
    {
        cache : 'no-store'
    }
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