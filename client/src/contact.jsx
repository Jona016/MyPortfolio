export default function Contact() {
    return (
        <>
            <div className="contact">
                <h1>Contact</h1>

                <form>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        />
                    </label>
                    <label>
                        Email:
                        <input
                        type="email"
                        name="email"
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                        name="message"
                        />
                    </label>
                    <button type="submit">Submit</button>
                    </form>

                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Email: your.email@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
            </div>
        </>
    );
}
    