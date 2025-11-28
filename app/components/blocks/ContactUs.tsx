'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Please enter your name.';
    if (!formData.email) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Please enter your phone number.';
    if (!formData.message) newErrors.message = 'Please enter your message.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // console.log('Form submitted:', formData);
      // Here you would typically send the data to a server
      alert('Thank you for your message! We will get back to you shortly.');
      setFormData({ name: '', company: '', email: '', phoneNumber: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="bg-brand-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl no-hyphen-break">Have Questions?</h2>
          <p className="mt-6 text-lg leading-8 text-brand-silver">
            We are here to help you navigate your investment journey. Whether you have questions about specific brokers or need help understanding index funds, drop us a message.
          </p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ${
                    errors.name ? 'ring-red-500' : 'ring-white/10'
                  } focus:ring-2 focus:ring-inset focus:ring-brand-saffron sm:text-sm sm:leading-6`}
                />
                {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company (Optional)"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-saffron sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ${
                    errors.email ? 'ring-red-500' : 'ring-white/10'
                  } focus:ring-2 focus:ring-inset focus:ring-brand-saffron sm:text-sm sm:leading-6`}
                />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phone-number"
                  autoComplete="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ${
                    errors.phoneNumber ? 'ring-red-500' : 'ring-white/10'
                  } focus:ring-2 focus:ring-inset focus:ring-brand-saffron sm:text-sm sm:leading-6`}
                />
                {errors.phoneNumber && <p className="mt-2 text-sm text-red-500">{errors.phoneNumber}</p>}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ${
                    errors.message ? 'ring-red-500' : 'ring-white/10'
                  } focus:ring-2 focus:ring-inset focus:ring-brand-saffron sm:text-sm sm:leading-6`}
                />
                {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-brand-saffron px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-brand-saffron-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-saffron"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-3">Send Message</span>
              <span
                aria-hidden="true"
                className="absolute right-4 translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                &gt;
              </span>
            </button>
          </div>
          <p className="mt-4 text-center text-sm leading-6 text-brand-silver">
            We respect your privacy and will never share your details with third parties.
          </p>
        </form>
      </div>
    </div>
  )
}
