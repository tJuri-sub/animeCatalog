import { FacebookIcon, InstagramIcon, TwitterIcon } from "./icons";

export const Footer = () => {
  return (
    <div className="px-10 pt-10 bg-secondary-default ">
      <div className="grid grid-cols-4 pb-10">
        <div className="flex flex-col col-span-1">
          <h1 className="text-base font-bold  tracking-wide text-text-default mb-3 uppercase">
            Get in touch
          </h1>

          <div>
            <form className="flex flex-col gap-4" action="">
              <input
                className="bg-highlight-default p-2 rounded placeholder:text-[#a5a5a5] text-text-default border-[#a5a5a5] border text-sm"
                type="text"
                name="name"
                id="name"
                placeholder="Write your name (Optional)"
              />
              <input
                className="bg-highlight-default p-2 rounded placeholder:text-[#a5a5a5] text-text-default border-[#a5a5a5] border text-sm"
                type="email"
                name="name"
                id="name"
                placeholder="Enter your email"
              />
              <textarea
                className="bg-highlight-default p-2 rounded placeholder:text-[#a5a5a5] text-text-default min-h-30 max-h-30 border-[#a5a5a5] border text-sm resize-none"
                name="message"
                id="message"
                placeholder="Write a message..."
              ></textarea>
              <input
                className="bg-[#3a8eef] rounded py-2 text-text-default"
                type="submit"
                value="Submit"
              />
            </form>
            <p className="text-sm text-text-default mt-1.5">
              By submitting this form, you agree to our{" "}
              <a href="" className="text-blue-500">
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
      <div className="py-5 mt-1 flex justify-between border-t border-[#999999]">
        <h1 className="text-text-default text-sm">
          &copy; 2025 Juri Turiano all rights reserved.
        </h1>
        <div className="text-text-default">
          <select name="" id="">
            <option value="">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};
