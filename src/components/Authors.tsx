import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Authors({ links }: {links: Array<Object>}) {
    const Avatars = links.map((item: any)=> {
        return (
            <a href={item.url ? item.url : ""}  key={item.begin}>
                <Avatar className="text-text" title={item.name}>
                    <AvatarImage src="" />
                    <AvatarFallback>{item.begin}</AvatarFallback>
                </Avatar>
            </a>
        )
    })
  return (
    <div className="flex gap-[5px]">
        {Avatars}
    </div>
  )
}