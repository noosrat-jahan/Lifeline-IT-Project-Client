import React, { useEffect } from "react"
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa"

// Custom shine animation using vanilla CSS
const injectStyles = () => {
  const style = document.createElement("style")
  style.innerHTML = `
    @keyframes shine {
      0% {
        transform: translate(200%, 200%) rotate(25deg);
        width: 30rem;
      height: 70rem;
      }
      100% {
        transform: translate(-100%, -100%) rotate(25deg);
        width: 30rem;
      height: 70rem;

      }
    }

    .shine {
      position: absolute;
      width: 0rem;
      height: 0rem;
      background: rgba(255, 255, 255, 0.4);
      transform: rotate(0deg);
      bottom: -2.5rem;
      right: -2.5rem;
      pointer-events: none;
    }

    .shine-hover:hover .shine {
      animation: shine 1s ease-in-out forwards;
    }
  `
  document.head.appendChild(style)
}

const ContactPage = () => {
  useEffect(() => {
    injectStyles()
  }, [])

  const contacts = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://facebook.com/yourpage",
      color: "bg-[#3b5998]",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/8801866725093",
      color: "bg-[#25D366]",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: "mailto:yourmail@example.com",
      color: "bg-[#EA4335]",
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      href: "tel:+8801705725296",
      color: "bg-[#f5c100] text-black",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-white p-6 font-sans">
      <div className="bg-white rounded-3xl shadow-xl border border-yellow-200 p-10 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h1>
        <div className="grid grid-cols-2 gap-6">
          {contacts.map((c, index) => (
            <a
              key={index}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`shine-hover relative overflow-hidden flex flex-col items-center justify-center rounded-xl p-6 font-semibold text-white shadow-lg hover:scale-105 transition-transform duration-300 ${c.color}`}
              style={{
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              }}
            >
              <div className="text-3xl mb-2 z-10">{c.icon}</div>
              <span className="text-base z-10">{c.name}</span>
              <span className="shine" />
            </a>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-gray-600">
          Or call us directly:{" "}
          <span className="text-[#d89200] font-bold">+8801866725093</span>
        </p>
      </div>
    </div>
  )
}

export default ContactPage
