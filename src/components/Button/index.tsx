type ButtonProps = {
 children: React.ReactNode,
}

const Button = (props: ButtonProps) => {
 const { children } = props

   return (
      <a 
      className="rounded-full shadow-inner shadow-white bg-gradient-to-b from-buttons-pink to-buttons-purple hover:from-transparent hover:to-transparent/20 text-white px-8 py-4 text-lg tracking-wide font-medium ">
        {children}
      </a>
   )
}

export default Button
