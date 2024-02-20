import React from "react";
import { motion } from "framer-motion";

export default function Main() {
    const buttonVariants = {
        hidden: { y: 100 },
        visible: { y: 0 },
      };

    
  return (
    <>
      <div className="container">
        <div className="row">
          <motion.div
            initial={{
              y: "-500px",
            }}
            animate={{
              y: "180px",
            }}
            transition={{
              duration: 2,
            }}
            className="col-4 text-white"
          >
            <motion.p
              initial={{
                x: "-300px",
              }}
              animate={{
                x: "180px",
              }}
              transition={{
                duration: 2,
              }}
            >
              MESSI INFINITE
            </motion.p>

            <motion.h1
              initial={{
                x: "-250px",
              }}
              animate={{
                x: "140px",
              }}
              transition={{
                duration: 2,
              }}
            >
              <b>Timeles</b>
            </motion.h1>
            <motion.p
            initial={{
                x: "-350px",
              }}
              animate={{
                x: "70px",
              }}
              transition={{
                duration: 2,
              }}
            >
                
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              esse consequatur officia animi unde culpa distinctio? Provident
              Voluptas esse consequatur officia animi unde culpa distinctio?
              Provident
            </motion.p>
            <motion.button
              type="button"
              class="btn btn-outline-secondary text-white mx-4 w-100"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              Buy it
            </motion.button>
          </motion.div>


         
          <motion.div
      initial={{
        y: "-500px",
        rotate: 0,
      }}
      animate={{
        y: "-50px",
        rotate: 360, 
      }}
      transition={{
        duration: 2,
      }}
      className="col-8 text-white"
    >
      <img src="./shoes.png"  className="mb-5" />
    </motion.div>
        </div>
      </div>
    </>
  );
}
