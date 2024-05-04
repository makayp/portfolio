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
        <div>
          <h1>
            Front-end web developer <span>{"</>"}</span>
          </h1>
          <p>
            I am Emmanuel, a front-end web developer based in Canada. Check out
            some of my amazing projects below.
          </p>
          <div>
            <img src='/linkedin-in.svg' alt='linkedin' />
            <img src='/x-twitter.svg' alt='x' />
            <img src='/github.svg' alt='github' />
          </div>
        </div>
        <div>
          <h3>TECH STACK |</h3>
          {stack.map(item => (
            <img src={item.image} alt={item.name} key={item.name} />
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Hero;
