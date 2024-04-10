import { Box, Stack } from "@chakra-ui/react"
import Card from "./Card"
import axios from "axios"



const Home = () => {

    const checkoutHandler = async (amount) => {


        const { data: { key } } = await axios.get("http://localhost:8000/api/getkey")


        const { data: { order } } = await axios.post("http://localhost:8000/api/checkOut", {
            amount

        })
        const options = {
            key,
            "amount": order.amount,
            "currency": "INR",
            "name": "omkar jagtap",
            "description": "Test Transaction",
            "image": "https://pbs.twimg.com/profile_images/1738592369732403200/DP8LOnap_400x400.jpg",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:8000/api/paymentVerification",
            "prefill": {
                "name": "omkar jagtap",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);

        razor.open();

}
return (

    <Box>

        <Stack h={"100vh"} alignItems={"center"} justifyContent={"center"} direction={["column", "row"]}>
            <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png?v=1620371415"} checkoutHandler={checkoutHandler} />

            <Card amount={3000} img={"https://imgs.search.brave.com/mQ7k-zbNzx59IVaHxE0-7WLsPZ1IR-9jJMVbN5MscXM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/OTkyOTM1L3Bob3Rv/L3NvbnktYTc3LWNh/bWVyYS13aXRoLWxl/bnMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVI4RGVzRkt6/LVpzOW8yUURfalg4/Vm9JWXIzWDh4WXdq/SGxxUmg5TExwSTg9"} checkoutHandler={checkoutHandler} />
            <Card amount={7000} img={"https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_black01_M?$productIntroPlatemobile$&fmt=png-alpha"} checkoutHandler={checkoutHandler} />

        </Stack>

    </Box>
)
}


export default Home;
