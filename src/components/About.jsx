import Button from "./Button";

function About() {
  return (
    <section id='about'>
      <div>
        <img src='/invisiblefriend.gif' alt='nft' />
        <Button type={"form-submit"} suffix={"→"}>
          View NFT
        </Button>
      </div>
      <div>
        <h3>About me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum et libero quis sollicitudin.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum et libero quis sollicitudin.
        </p>
      </div>
    </section>
  );
}

export default About;
