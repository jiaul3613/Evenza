import Container from "./Container"
import Card from './Card'
import ico1 from '../assets/card1.svg'
import ico2 from '../assets/card2.png'
import ico3 from '../assets/card3.png'
import ico4 from '../assets/card4.png'
//import img3 from '../assets/Ima3.png'



const Core = () => {
  return (
 <>
    {/* <div className="bg-[url(../assets/Ima3.png)]"> */}



    <div className="bg-[#161A2D]">
        <Container> 
                <div >
                    <h3 className="text-white text-center pt-20">Core Feature</h3>
                    <h2 className="text-white text-center font-extrabold pt-2 pb-2 leading-10">Core features that power our exceptional services</h2>
                </div>

                <div className="grid grid-cols-4 gap-20 text-white">

                    <Card hed='Event Planning Manage' bod='Deliver seamless virtual experience with high-quality streaming and interactive tools.' ico={ico1}  bgColor="bg-emerald-600"/>
                    <Card hed='Conference Coordination' bod='Deliver seamless virtual experience with high-quality streaming and interactive tools.' ico={ico2} bgColor="bg-primary"/>
                    <Card hed='Venue Booking & Setup' bod='Deliver seamless virtual experience with high-quality streaming and interactive tools.' ico={ico3} bgColor="bg-emerald-600"/> 
                    <Card hed='Post-Event Analytics' bod='Deliver seamless virtual experience with high-quality streaming and interactive tools.' ico={ico4} bgColor="bg-emerald-600"/>
                
                </div>
           

        </Container>
        {/* </div> */}
        </div>
    </>

  )
}

export default Core