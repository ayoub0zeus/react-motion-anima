import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto"> {/* Center the items with mx-auto */}
            <li className="nav-item active">
              <motion.a
                initial={{
                  x: '-50vw', // Move from the left outside of the viewport
                }}
                animate={{
                  x: '0',
                }}
                transition={{
                  duration: 1,
                }}
                className="nav-link text-white"
                href="#"
              >
                Home
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                initial={{
                  x: '-50vw', // Move from the left outside of the viewport
                }}
                animate={{
                  x: '0',
                }}
                transition={{
                  duration: 1.2,
                }}
                className="nav-link text-white"
                href="#"
              >
                Shoes
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                initial={{
                  x: '50vw', // Move from the right outside of the viewport
                }}
                animate={{
                  x: '0',
                }}
                transition={{
                  duration: 1.4,
                }}
                className="nav-link text-white"
                href="#"
              >
                Prices
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                initial={{
                  x: '50vw', // Move from the right outside of the viewport
                }}
                animate={{
                  x: '0',
                }}
                transition={{
                  duration: 1.6,
                }}
                className="nav-link text-white"
                href="#"
              >
                Cart
              </motion.a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
