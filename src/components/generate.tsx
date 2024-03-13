import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { generatePass } from "@/lib/utils/password-generator";

export default function Generate({setGeneratedPassword}: {setGeneratedPassword: Function}) {
  const [value, setValue] = useState(4)

  const selectItemElements: any = []

  useEffect(()=> {handleClick()}, [])

  for (let index = 4; index < 100; index++) {
    const element = <SelectItem value={`${index}`} key={index} className="w-[50px] cursor-pointer">{index}</SelectItem>
    selectItemElements.push(element)
  }

  function handleClick() {
    setGeneratedPassword(generatePass(value)) 
  }

  const handleValueChange = (newValue: string) => {
    setValue(parseInt(newValue));
  };

  return (
    <div className="flex justify-start gap-7">
        <Button className="bg-primary w-[191px] text-white rounded" onClick={()=> handleClick()}>Generate passwords</Button>
        <Select value={`${value}`} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[50px] bg-background text-text rounded px-2">
          <SelectValue placeholder={value} aria-label={`${value}`}/>
        </SelectTrigger>
        <SelectContent className="p-0 m-0">
          <SelectGroup className="w-fit m-0">
            {selectItemElements}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
