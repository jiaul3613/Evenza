import Container from './Container'
import bannerImg from '../assets/banner.jpg' 

const Banner = () => {
  return (
    <div 
      // Added pt-24 (top padding) to push content down below the fixed nav
      className='bg-cover bg-no-repeat min-h-screen pt-24 flex items-center' 
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <Container>
        <div className="text-white max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">Connecting Minds to Shape Tomorrow's Big Ideas</h1>
          <p className="text-lg text-gray-200 text-center">
            Experience a powerful gathering of visionaries, creators, and industry experts united by one goal— exchanging ideas that spark growth, innovation, and meaningful change.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Banner

