type ContentWrapperProps = {
    children: React.ReactNode;

}
const ContentWrapper = (props: ContentWrapperProps) => {
    const { children } = props

    return (
        <div className="container flex max-w-7xl m-8">
            
            {children}
            
        </div>
    )
}

export default ContentWrapper
