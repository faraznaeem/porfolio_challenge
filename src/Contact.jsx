import React from "react";
import UndrawEmailCapture from "react-undraw-illustrations/";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
        
  }
  class ContactForm extends React.Component {
    constructor(props) {
        <UndrawEmailCapture />
      super(props);
      this.state = { name: "",company: "", email: "", message: "" };
    }

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };
    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name,  company, email, message } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
            
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Company name: <input type="text" name="company" value={company} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      );
    }
  }

export default ContactForm