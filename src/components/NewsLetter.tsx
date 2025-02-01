import { useState } from 'react';
import { toast } from "sonner";

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail('');
    } else {
      toast.error("Please enter a valid email address");
    }
  };
  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-4">
      <div className="relative bg-[#a48244]/80 rounded-tl-lg rounded-br-lg p-8">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 bg-white text-black font-medium placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-5 bg-[#3d3a23] hover:bg-[#2a2817] text-white font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default NewsLetter
