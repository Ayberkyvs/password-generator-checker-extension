import { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Copy } from 'lucide-react';
import { Check } from 'lucide-react';


export default function ShowCreatedPassword({ createdPassword }: {createdPassword: string}) {
const [copied, setCopied] = useState(false);
const copyToClipboard = () => {
    navigator.clipboard.writeText(createdPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
};
  return (
    <div className="w-full mt-[25px]">
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger className="w-full">    
                <div className="flex justify-between items-center px-5 w-full h-[39px] bg-background-50 text-primary 
                rounded overflow-hidden cursor-pointer" onClick={()=> copyToClipboard()}>
                    <div className="truncate">{createdPassword}</div>
                    <div onClick={()=> copyToClipboard()}>
                        {copied ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                    </div>             
                </div>
            </TooltipTrigger>
            <TooltipContent className="bg-background-50 text-text cursor-pointer border-[1px] border-black/10 rounded" onClick={()=> copyToClipboard()}>
                <p>Copy</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
    </div>
  )
}



// <div className="flex justify-start items-center px-5 w-full h-[39px] bg-background-50 text-primary 
// rounded mt-[35px] overflow-hidden cursor-pointer" onClick={()=> copyToClipboard()}>
//     <div className="truncate">{createdPassword}</div>
// </div>