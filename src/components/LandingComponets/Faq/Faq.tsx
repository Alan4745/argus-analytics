import React from "react";
import { motion } from "framer-motion";
import "./Faq.css";

const Faq = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const accordionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="home-faq pt-5 pb-5">
      <div className="container overview-content text-center">
        <motion.span
          className="aboutUs-span gradient-text-about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          variants={headerVariants}
        >
          FAQ
        </motion.span>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={headerVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={headerVariants}
        >
          It is a long established fact that a reader will be <br /> distracted
          by the readable content.
        </motion.p>
      </div>

      <div className="container mt-5">
        <div className="accordion" id="accordionExample">
          {["collapseOne", "collapseTwo", "collapseThree", "collapseFour"].map(
            (collapseId, index) => (
              <motion.div
                className="accordion-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                variants={accordionVariants}
                key={collapseId}
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded="false"
                    aria-controls={collapseId}
                  >
                    <span className="gradient-text-FAQ">
                      {collapseId === "collapseOne" &&
                        "Important, popular and topical question?"}
                      {collapseId === "collapseTwo" &&
                        "Popular and topical question?"}
                      {collapseId === "collapseThree" &&
                        "Important and topical question?"}
                      {collapseId === "collapseFour" &&
                        "Important, popular and topical question?"}
                    </span>
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${
                    collapseId === "collapseOne" ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      This is the {index + 1} item's accordion body.
                    </strong>{" "}
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
