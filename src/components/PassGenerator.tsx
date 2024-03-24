import Generate from './generate'
import { Separator } from '@radix-ui/react-dropdown-menu'
import ShowCreatedPassword from './ShowCreatedPassword'
import { useState } from 'react'

export default function PassGenerator({ data }:{data: any}) {
const [generatedPassword, setGeneratedPassword] = useState("")
  return (
    <section className='flex flex-col justify-between h-fit focus-within:outline-0 ' tabIndex={-1}>
        <div className='flex flex-col mt-[35px] gap-[12px]'>
            <h1 className='hero--text text-[40px] leading-[40px] font-extrabold text-text'>{data.hero} 
            <br /><span className='text-primary w-full'>{data.hero2}</span></h1>
            <p className='text-text mb-[25px]'>{data.paragraph}</p>
            <Generate setGeneratedPassword={setGeneratedPassword}/>
        </div>
        <Separator className='border-[1px] border-background-50 mt-[25px]'/>
        <ShowCreatedPassword createdPassword={generatedPassword}/>
    </section>
  )
}