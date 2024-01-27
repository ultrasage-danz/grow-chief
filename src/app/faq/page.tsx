import { Flex } from '@chakra-ui/react'

const GET_LATEST_FAQ_QUERY = gql`query LatestFAQ {
    faqCollection(limit: 10) {
      items {
        title
        body
      }
    }
  }`  

type FAQPageProps = {
 children: React.ReactNode,
}

const FAQPage = (props: FAQPageProps) => {
    
 const { children } = props

   return (
      <Flex>
        {children}
      </Flex>
    )
}

export default FAQPage
