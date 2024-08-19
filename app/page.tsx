export default function Home() {
const  submitAction =  async (formData:FormData) => {
  'use server';
  console.log(formData)
  f();  
}
const f = () => {
  console.log('hello world')
  console.log(localStorage)

}
  return (
   <>
      <h1>home page</h1>
      <form action={submitAction}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <button>Submit</button>
      </form>
   </>
  );
}
