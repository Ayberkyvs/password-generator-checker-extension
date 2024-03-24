import { Separator } from '@radix-ui/react-dropdown-menu'

 export default function Checker({data}: {data: any}) {
  return (
    <section className='flex flex-col justify-between h-fit'>
        <div className='flex flex-col mt-[35px] gap-[12px]'>
            <h1 className='hero--text text-[40px] leading-[40px] font-extrabold text-text'>{data.hero} 
            <br /><span className='text-primary w-full'>{data.hero2}</span></h1>
            <p className='text-text mb-[25px]'>{data.paragraph}</p>
        </div>
        <Separator className='border-[1px] border-background-50 mt-[25px] mb-[25px]'/>
        <div className="flex justify-between items-center px-5 w-full h-[39px] bg-background-50 text-primary 
        rounded overflow-hidden cursor-not-allowed border-[1px] border-[red]/50" aria-disabled>
            <div className="truncate"></div>                    
            <div className="flex justify-center items-center gap-2 text-primary-200">
                <div className={`flex justify-center items-center w-[30px] h-[15px] rounded bg-primary-200}`}>

                </div>
            </div>             
        </div>
    </section>
  )
}