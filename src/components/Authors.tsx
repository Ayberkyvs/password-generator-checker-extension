import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Authors({ links }: {links: Array<Object>}) {
    const Avatars = links.map((item: any)=> {
        return (
            <a href={item.url ? item.url : ""}  key={item.begin}>
                <Avatar className="text-text bg-background-100" title={item.name}>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-transparent">{item.begin}</AvatarFallback>
                </Avatar>
            </a>
        )
    })
  return (
    <div className="flex gap-[2px]">
        {Avatars}
    </div>
  )
}