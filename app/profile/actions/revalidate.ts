'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

 
export async function revalidate() {
    setTimeout(()=> {
        revalidatePath('/image','layout')
        redirect('/image')
    },10000)
}