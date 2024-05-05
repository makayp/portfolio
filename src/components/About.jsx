import Button from "./Button";

function About() {
  return (
    <section id='about'>
      <div>
        <div className='about-col about-image'>
          <img src='/public/invisiblefriend.gif' alt='nft' />
          <Button type={"about-button"} suffix={"→"}>
            View NFT
          </Button>
        </div>
        <div className='about-col about-details'>
          <h2>About me</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            bibendum et libero quis sollicitudin.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            bibendum et libero quis sollicitudin.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
