'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

 
export async function revalidate() {
    revalidatePath('/image','layout')
        redirect('/image')
}