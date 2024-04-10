import { Box, VStack, Heading, Text } from "@chakra-ui/react"

import { useSearchParams } from "react-router-dom"




const Payment = () => {

    const searchQuery = useSearchParams()[0]

    const referenceNum = searchQuery.get("reference")
   


    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"} >

                <Heading textTransform={"uppercase"}>Order successfully</Heading>

                <Text>
                    Referance No:- {referenceNum}<br></br>
               

                </Text>




            </VStack>


        </Box>
    )
}

export default Payment
