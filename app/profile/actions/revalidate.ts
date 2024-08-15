'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

 
export async function revalidate() {
    new Promise((resolve) => setTimeout(resolve,5000));
    revalidatePath('/image','layout')
        redirect('/image')
}