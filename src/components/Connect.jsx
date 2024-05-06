import Button from "./Button";

function Connect() {
  return (
    <div className='connect'>
      <h2>Connect... 👬</h2>
      <p>Feel free to get in touch with me below.</p>
      <form action=''>
        <input type='text' placeholder='name' />
        <input type='email' placeholder='email' />
        <textarea cols='30' rows='7' placeholder='message'></textarea>
        <Button type={"form-submit"} suffix={"→"}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Connect;
