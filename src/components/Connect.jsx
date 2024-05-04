import Button from "./Button";

function Connect() {
  return (
    <div className='connect'>
      <h3>Connect... 👬</h3>
      <p>Feel free to get in touch with me below.</p>
      <input type='text' />
      <input type='email' />
      <textarea cols='30' rows='10'></textarea>
      <Button type={"form-submit"} suffix={"→"}>
        Send
      </Button>
    </div>
  );
}

export default Connect;
