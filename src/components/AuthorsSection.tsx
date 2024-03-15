import Authors from './Authors'

export default function AuthorsSection({data}: {data: Array<Object>}) {
  return (
    <section className='absolute bottom-0 flex items-center mb-[35px] w-full h-[50px]'>
        <Authors links={data}/>
    </section>
  )
}

