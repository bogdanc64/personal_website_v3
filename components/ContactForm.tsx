import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [response, setResponse] = useState<string | null>(null)

    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");

    const handleSubmit = (e:any) => { 
      e.preventDefault()
      
      setSubmitted(true)
      
      const data = {
        name,
        email,
        subject,
        message
      }
      fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            setResponse(res.status === 200 ? "Success" : "Error");
            resetForm();
          })
    }

    const resetForm = () => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      inputs.forEach((input) => (input.value = ""));

      if (textarea) {
        textarea.value  = "";
      }
    }

    return (
        <form id="contactForm" className='flex flex-col text-center items-center justify-center' onSubmit={(e)=>{handleSubmit(e)}}>
            <input
            type="text" 
            onChange={(e)=>{setName(e.target.value)}} 
            className="form-control shadow w-2/5 px-3 py-1.5 text-base font-normal text-primary bg-primary border border-solid border-gray-300 rounded transition ease-in-out my-3   "
            placeholder="Name"
            required
            />
            <input
            type="email"
            onChange={(e)=>{setEmail(e.target.value)}} 
            className="form-control shadow w-2/5 px-3 py-1.5 text-base font-normal text-primary bg-primary border border-solid border-gray-300 rounded transition ease-in-out my-3 "
            placeholder="Email"
            required
            />
            <input
            type="text"
            onChange={(e)=>{setSubject(e.target.value)}} 
            className="form-control shadow w-2/5 px-3 py-1.5 text-base font-normal text-primary bg-primary border border-solid border-gray-300 rounded transition ease-in-out my-3   "
            placeholder="Subject"
            required
            />
            <textarea
            rows={6}
            onChange={(e)=>{setMessage(e.target.value)}} 
            className="form-control shadow w-2/5 px-3 py-1.5 text-base font-normal text-primary bg-primary border border-solid border-gray-300 rounded transition ease-in-out my-3 "
            placeholder="Your message"
            required
            />
            <input type="submit" className="bg-primary text-color font-semibold py-2 px-4 border hover:text-color transition-all duration-300 rounded cursor-pointer shadow my-3" />
            {
              submitted !== true ? null : (response === null)
                                 ? <LoadingSpinner /> : (response === "Success")
                                 ? <p className="my-6">Message has been sent sucessfully!</p> : <p className="my-6 text-red-500">An error has been occured!</p>
            }
          
        </form>
        )
}

export default ContactForm