import { ModeToggle } from './mode-toggle'

export default function Header({ title }: {title: string}) {
  return (
    <section className='flex justify-between items-center w-full h-[40px]'>
        <h1 className='font-[Karla] font-extrabold tracking-tighter text-primary text-[30px]'>{title}</h1>
        <ModeToggle className='rounded-xl'/>
    </section>
  )
}
