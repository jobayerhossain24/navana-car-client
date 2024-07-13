const Contact = () => {
  return (
    <div>
      <form>
        <textarea
          name="message"
          className=" mt-4 textarea textarea-bordered h-24 w-full"
          placeholder="Your Message"
          required
        ></textarea>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          <input
            type="text"
            name="yourName"
            placeholder="Your Name"
            className="input input-ghost w-50 input-bordered"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-ghost w-50 input-bordered "
            required
          />
        </div>

        <input
          className="mt-4 btn btn-warning font-bold"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contact;
