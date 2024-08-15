import Image from "next/image";

const fetchImage =async()=> {
const res = await fetch('https://dog.ceo/api/breeds/image/random')
const data = await res.json()
return data;
}
const RandomImage = async () => {
    const data = await fetchImage()
    return <>
    <h1>image page</h1>
    <Image src={data?.message} alt="image" width={500} height={200} />
    </>
}

export default RandomImage;