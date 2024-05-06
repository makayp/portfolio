import Button from "./Button";

function About() {
  return (
    <section id='about'>
      <div>
        <div className='about-col about-image'>
          <img src='/public/invisible friend.gif' alt='nft' />
          <a
            href='https://opensea.io/assets/ethereum/0x59468516a8259058bad1ca5f8f4bff190d30e066/177/'
            target='_blank'
          >
            <Button type={"about-button"} suffix={"→"}>
              View NFT
            </Button>
          </a>
        </div>
        <div className='about-col about-details'>
          <h2>About me</h2>

          <p>
            I am a front-end web developer with great passion for programming.
            My current tech stack includes HTML, CSS, Javascript, ReactJS.
          </p>
          <p>
            I am exploring other framworks such as NextJS & language such as
            Typescript.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
