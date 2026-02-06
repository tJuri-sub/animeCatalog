import React, { useState } from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./icons";

import toast from "react-hot-toast";

import { sendMessage } from "../api/contact.api";

export const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [inputForm, setInputForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await sendMessage({
        name: inputForm.username,
        email: inputForm.email,
        message: inputForm.message,
      });

      toast.success("Message sent!");
      setInputForm({ username: "", email: "", message: "" });
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-10 pt-10 bg-secondary-default ">
      <div className="grid grid-cols-4 pb-10">
        <div className="flex flex-col col-span-1">
          <h1 className="text-base font-bold  tracking-wide text-text-default mb-3 uppercase">
            Get in touch
          </h1>

          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="bg-highlight-default p-2 rounded placeholder:text-[#a5a5a5] text-text-default border-highlight-default border text-sm"
                type="text"
                name="username"
                id="username"
                placeholder="Write your name (Optional)"
                autoComplete="false"
                onChange={handleInput}
                value={inputForm.username}
                disabled={loading}
              />
              <input
                className="bg-highlight-default p-2 rounded placeholder:text-[#a5a5a5] text-text-default border-highlight-default border text-sm"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="false"
                onChange={handleInput}
                value={inputForm.email}
                disabled={loading}
              />
              <textarea
                className="bg-highlight-default p-2 rounded placeholder:text-[#a5a5a5] text-text-default min-h-30 max-h-30 border-highlight-default border text-sm resize-none"
                name="message"
                id="message"
                placeholder="Write a message..."
                autoComplete="false"
                onChange={handleInput}
                value={inputForm.message}
                disabled={loading}
              ></textarea>

              <input
                className="bg-accent-default rounded py-2 text-secondary-default disabled:opacity-50 cursor-pointer"
                type="submit"
                value={loading ? "Sending..." : "Submit"}
                disabled={loading}
              />
            </form>
            <p className="text-sm text-text-default mt-1.5">
              By submitting this form, you agree to our{" "}
              <a href="" className="text-accent-default">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-around col-span-2">
          <div>
            <h1 className="text-base font-bold tracking-wide text-text-default mb-3 uppercase">
              Company
            </h1>
            <ul className="text-text-default font-thin *:">
              <li>About us</li>
              <li>Our Story</li>
              <li>Our Story</li>
            </ul>
          </div>
          <div>
            <h1 className="text-base  font-bold tracking-wide text-text-default mb-3 uppercase">
              Resources
            </h1>
            <ul className="text-text-default font-thin">
              <li>Blog</li>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h1 className="text-base  font-bold tracking-wide text-text-default mb-3 uppercase">
              Legal
            </h1>
            <ul className="text-text-default font-thin">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-base  font-bold tracking-wide text-text-default mb-3 uppercase">
            Connect with us
          </h1>
          <ul className="flex gap-5">
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-5 mt-1 flex justify-between border-t border-[#999999cc] ">
        <h1 className="text-text-default text-sm">
          &copy; 2025 Juri Turiano all rights reserved.
        </h1>
        <div className="text-text-default">
          <select name="" id="">
            <option value="">Under Construction</option>
          </select>
        </div>
      </div>
    </div>
  );
};
