import React , {useState, useEffect, useRef }from "react"
import { Link, navigate  } from "gatsby"

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //const form = useRef(null);

  const submit = async (e) => {
    setLoading(true)
    e.preventDefault();

    //console.log('e',e);
    //await new Promise(resolve => setTimeout(resolve, 1000));


    const { msg, email, mobile, name } = e.target.elements
    const data = {
      message: msg.value,
      senderEmail: email.value,
      senderMobile: mobile.value,
      senderName: name.value
    }

    console.log('data',data);

    const url = '/.netlify/functions/instantQuote';
    const payload = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }

    const response = await fetch(url, payload);

    console.log('response',response);
    setLoading(false)

    if (response.status == 200){
      navigate('/thank-you')
    }else {
      console.log('error');
      setError(true);
    }

  }

  return (
    <div className="contactForm">
      <h3>Request a Quotation</h3>
      <form onSubmit={submit} >
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" name="name" required />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" name="email" required  />
          </div>
          {/*<p className="help is-danger">This email is invalid</p>*/}
        </div>

        <div className="field">
          <label className="label">Mobile</label>
          <div className="control">
            <input className="input" type="text" name="mobile"  />
          </div>
        </div>


        <div className="field">
          <label className="label" >Message</label>
          <div className="control">
            <textarea className="textarea" name="msg"></textarea>
          </div>
        </div>

        { error &&
          <div class="notification is-warning">We couldnt submit the form, can you try again.</div>
        }

        <div className="field is-grouped is-align-items-flex-end">

          <div className="control">
            <button className="button buttonOutlined" type="submit" disabled={loading}>{ loading?'Sending...':'Submit'}</button>
          </div>
        </div>
      </form>
    </div>
  )
}
