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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Settings2Icon } from "lucide-react";
import { useHotkeys } from 'react-hotkeys-hook'



export default function Generate({setGeneratedPassword}: {setGeneratedPassword: Function}) {
  const [value, setValue] = useState(16)
  const [settings, setSettings] = useState({lowercase: true, uppercase: true, numbers: true, symbols: true})

  const selectItemElements: any = []
  useHotkeys('space', () => handleClick())

  useEffect(()=> {handleClick()}, [])

  for (let index = 4; index < 100; index++) {
    const element = <SelectItem value={`${index}`} key={index} className="w-[50px] cursor-pointer">{index}</SelectItem>
    selectItemElements.push(element)
  }

  const handleClick = () => {
    setGeneratedPassword(generatePass(value, settings)) 
  }

  const handleValueChange = (newValue: string) => {
    setValue(parseInt(newValue));
  };

  const handleCheckboxClick = (name: keyof typeof settings) => {
    const updatedSettings = { ...settings, [name]: !settings[name] };
    if (Object.values(updatedSettings).every(value => !value && !updatedSettings[name])) {
      return;
    }
    setSettings(updatedSettings);
  };

  const borderSettings = "border-[2px] border-black/10 dark:border-[1px] dark:border-white/30"
  return (
    <div className="flex justify-start gap-3">
        <Button className="bg-primary dark:bg-primary-200 w-[191px] text-white rounded" onClick={()=> handleClick()}>Generate passwords</Button>
        <div className="flex gap-2">
          <Select value={`${value}`} onValueChange={handleValueChange}>
          <SelectTrigger className={`w-[50px] bg-background text-text rounded py-0 px-[8px] ${borderSettings}`}>
            <SelectValue placeholder={value} aria-label={`${value}`}/>
          </SelectTrigger>
          <SelectContent className={`p-0 m-0 bg-background dark:bg-background ${borderSettings}`}>
            <SelectGroup className="w-fit m-0">
              {selectItemElements}
            </SelectGroup>
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger><Settings2Icon className="text-text" /></DropdownMenuTrigger>
          <DropdownMenuContent className={`bg-background text-text ${borderSettings}`}>
            <DropdownMenuLabel>Generator Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Checkbox className="mr-2" checked={settings.lowercase} name="lowercase" onClick={()=> handleCheckboxClick("lowercase")}/> a-z
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Checkbox className="mr-2" checked={settings.uppercase} name="uppercase" onClick={()=> handleCheckboxClick("uppercase")}/> A-Z
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Checkbox className="mr-2" checked={settings.numbers} name="numbers" onClick={()=> handleCheckboxClick("numbers")}/> 0-9
            </DropdownMenuItem>
            <DropdownMenuItem >
              <Checkbox className="mr-2" checked={settings.symbols} name="symbols" onClick={()=> handleCheckboxClick("symbols")}/> Symbols
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
