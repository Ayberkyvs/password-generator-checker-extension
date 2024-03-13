import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'
import Generate from './components/generate'
import { Separator } from '@radix-ui/react-dropdown-menu'
import ShowCreatedPassword from './components/ShowCreatedPassword'
import Authors from './components/Authors'
import { useState } from 'react'

export default function App() {
  const [generatedPassword, setGeneratedPassword] = useState("")

  const data = {
    title: "YAVAS",
    hero: "Generate a",
    hero2: "random password",
    paragraph: "Never use an insecure password again",
    links: [
      {
        name: "Ayberk Yavaş",
        url: "https://www.ayberkyavas.com",
        begin: "AY"
      },
      {
        name: "Çağatay Ege Yıldırım",
        url: "",
        begin: "ÇY"
      }
    ]
  };  

  console.log(generatedPassword)
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='w-[550px] h-[550px] bg-background px-[24px] py-[22px]'>
        <div className='flex justify-between w-full h-fit'>
          <h1 className='font-[Karla] font-extrabold tracking-tighter text-primary text-[30px]'>{data.title}</h1>
          <ModeToggle className='rounded-xl'/>
        </div>
        <div className='flex flex-col justify-between h-fit'>
          <div className='flex flex-col mt-[60px] gap-[12px]'>
            <h1 className='hero--text text-[40px] leading-[40px] font-extrabold text-text'>{data.hero} <br /><span className='text-primary w-full'>{data.hero2}</span></h1>
            <p className='text-text mb-[25px]'>{data.paragraph}</p>
            <Generate setGeneratedPassword={setGeneratedPassword}/>
          </div>
          <Separator className='border-[1px] border-background-50 mt-[35px]'/>
          <ShowCreatedPassword createdPassword={generatedPassword}/>
          <div className='mt-[35px]'>
            <Authors links={data.links}/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}


