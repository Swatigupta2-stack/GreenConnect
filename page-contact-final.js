import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.'
    if (!form.message.trim()) newErrors.message = 'Message cannot be empty.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } else {
      setSubmitted(false)
    }
  }

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="page-subtitle">Questions, partnerships, or feedback — we'd love to hear from you.</p>

      {submitted && (
        <div className="success-banner">✅ Your message has been sent. We'll get back to you soon!</div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>

        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>

        <label>
          Subject
          <input type="text" name="subject" value={form.subject} onChange={handleChange} />
          {errors.subject && <span className="field-error">{errors.subject}</span>}
        </label>

        <label>
          Message
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </label>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
