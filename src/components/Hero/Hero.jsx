import "./Hero.scss";

function Hero({selectedVideo}) {
  return (
    <div className="hero">
        <video className="hero__video" src={selectedVideo.url} alt={selectedVideo.title} controls poster={selectedVideo.image}></video>
    </div>
  )
}

export default Hero;