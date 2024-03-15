import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import Header from './components/Header'
import PassGenerator from './components/PassGenerator'
import AuthorsSection from './components/AuthorsSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Checker from './components/Checker';

export default function App() {
  const data = {
    header: {
      title: "YAVAS",
    },
    passGenerator: {
      hero: "Generate a",
      hero2: "random password",
      paragraph: "Never use an insecure password again",
    },
    checker: {
      hero: "Check if your",
      hero2: "password is safe",
      paragraph: "Never use an insecure password again",
    },
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
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='relative w-[550px] h-[550px] bg-background px-[24px] py-[22px]'>
        <Header title={data.header.title}/>
        <Tabs defaultValue="generator" className="w-full h-fit">
          <TabsList className='w-full mt-3'>
            <TabsTrigger value="generator" className='w-1/2 dark:data-[state=active]:bg-primary-50'>Generator</TabsTrigger>
            <TabsTrigger value="checker" className='w-1/2 dark:data-[state=active]:bg-primary-50'>Checker</TabsTrigger>
          </TabsList>
          <TabsContent value="generator">
            <PassGenerator data={data.passGenerator}/>
          </TabsContent>
          <TabsContent value="checker">
            <Checker data={data.checker}/>
          </TabsContent>
        </Tabs>
        <AuthorsSection data={data.links}/>
      </div>
    </ThemeProvider>
  )
}


