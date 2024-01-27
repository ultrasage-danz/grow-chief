import NextLink from 'next/link'
import ContentWrapper from "@/components/ContentWrapper"
import Logo from "../Logo"
import Logo2 from '../Logo copy'


// import { type } from 'os'
type MainNavigationProps = {
    children: React.ReactNode;

}
const MainNavigation = (props: MainNavigationProps) => {
    const { children } = props
    return (
        
        <div className="w-11/12 max-xl:p-4 focus:ring-2 flex items-center bg-gradient-to-r bg-transparent 
        h-20  rounded-lg items-center border border-slate-500  border-t-2 border-slate-500 shadow hover:shadow-lg ml-10 mt-6">
        
        
            <ContentWrapper>
             {/* <div className='flex items-center'><Logo height={30} width={220} /></div> */}
                
                <Logo height={30} width={220} />
                <ul className='inline-flex ms-auto text-base'>
                    {/* <div className="font-sans flex items-end space-x-12">
                        <div className="hover:text-sky-400 underline hover:underline-offset-8">Home</div> 
                        <div className="hover:text-sky-400 underline hover:underline-offset-8">Product</div> 
                        <div className="hover:text-sky-400 underline hover:underline-offset-8">Pricing</div> 
                        <div className="hover:text-sky-400 underline hover:underline-offset-8">Blog</div>
                    </div> */}
                    <li className='m-2'>
                        <NextLink className="hover:text-indigo-400 underline hover:underline-offset-8" href={"/home"}>
                            Home
                        </NextLink>

                        <NextLink className='ml-24 hover:text-indigo-400 underline hover:underline-offset-8' href={"/Product"}>
                            Product
                        </NextLink>

                        <NextLink className='ml-24 hover:text-indigo-400 underline hover:underline-offset-8' href={"/Pricing"}>
                            Pricing
                        </NextLink>

                        <NextLink className='ml-24 hover:text-indigo-400 underline hover:underline-offset-8' href={"/Blog"}> 
                            Blog
                        </NextLink>

                        
                    </li>
                    <NextLink className='ml-40 hover:text-indigo-400 underline hover:underline-offset-8' href={"https://github.com/github-20k/growchief"}> 
                        <Logo2 height={43} width={191}></Logo2>
                        </NextLink>
                </ul>
                    
                
               

                {/* <div>
                
                <div className='rotate-22 ml-auto'>
                <Desktop2 height={338} width={494} />            
                </div>
                <div className='rotate-22 mr-auto'>
                <Desktop3 height={338} width={494} />            
                </div>
                <div className='rotate-22 ml-auto' >
                <Desktop4 height={338} width={456} />            
                </div>
            </div> */}
             
                
            </ContentWrapper>
            {/* <div>
                <div className='rotate-22 mt-auto'>
                <Desktop height={283} width={883} />
                </div>
                <div className='rotate-22 ml-auto'>
                <Desktop2 height={338} width={494} />            
                </div>
                <div className='rotate-22 mr-auto'>
                <Desktop3 height={338} width={494} />            
                </div>
                <div className='rotate-22 ml-auto' >
                <Desktop4 height={338} width={456} />            
                </div>
            </div> */}
            
            
            
            
        </div>
    )
}

export default MainNavigation
