import Container from './Container'
import logo from '../assets/logo.png'
import Btn from '../conponant/Btn'
const NavBar = () => {
  return (
    <>
    <nav className='text-white h-15 p-1 absolute w-full backdrop-blur-md'>
     <Container > 
      <div className='flex justify-between items-center'>
        <div className=''> <img src={logo} alt="" /></div>
        <div className='flex gap-6'>
            <ul><li>Home</li></ul>
            <ul><li>About Us</li></ul>
            <ul><li>schedule</li></ul>
            <ul><li>Block</li></ul>
            <ul><li>Pages</li></ul>
            <ul><li>Contact Us</li></ul>
        </div>
        <div>
          <Btn>Join The Conference</Btn>
        </div>
      </div>

     </Container>
    </nav>

    </>
  )
}

export default NavBar