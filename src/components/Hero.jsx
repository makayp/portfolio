import Button from "./Button";

const stack = [
  { name: "HTML", image: "/html.svg" },
  { name: "CSS", image: "/css.svg" },
  { name: "Javascript", image: "/javascript.svg" },
  { name: "React", image: "/react.svg" },
  { name: "NodeJS", image: "/nodejs.svg" },
];

function Hero() {
  return (
    <section id='hero'>
      <div>
        <div className='intro'>
          <div className='hero-text'>
            <h1>
              Front-end web
              <br /> developer <span>{"</>"}</span>
            </h1>
            <p>
              I am Emmanuel, a front-end web developer based in Canada. Check
              out some of my amazing projects below.
            </p>
            <div className='hero-socials'>
              <img src='/linkedin-in.svg' alt='linkedin' />
              <img src='/github.svg' alt='github' />
            </div>
            <Button type={"hero-btn"} suffix={"→"}>
              View Projects
            </Button>
          </div>
          <div className='image-container'>
            <img className='hero-image' src='/monkey.jpeg' alt='hero image' />
          </div>
        </div>
        <div className='skills'>
          <h3>TECH STACK |</h3>
          {stack.map(item => (
            <img
              className='skill'
              src={item.image}
              alt={item.name}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
