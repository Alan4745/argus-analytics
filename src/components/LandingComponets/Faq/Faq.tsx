import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Faq.css";
import { useTranslation } from "react-i18next";
import { faqCollapseData, ICollapse } from "./faq.data";

const Faq = () => {
  const {t} = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [collapseData, setCollapseData] = useState<ICollapse[]>(faqCollapseData);

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const accordionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const changeActiveCollapse = (collapse: ICollapse) => {
    const collapseUnactive = faqCollapseData.filter(col => col.nameCollapse !== collapse.nameCollapse);
    collapseUnactive.map(col => col.active = false);
    collapse.active = !collapse.active;
    setCollapseData(faqCollapseData);
  }

  const changeIcon = (index: number): string => {
    return activeIndex === index ? 'fa-solid fa-minus' : 'fa-solid fa-plus';
  };

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
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
          className=" text-left"
          variants={headerVariants}
        >
          {/* Frequently Asked Questions */}
          {t('faqTitle')}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=" text-left"
          variants={headerVariants}
        >
          {/* It is a long established fact that a reader will be <br /> distracted
          by the readable content. */}
          {t('faqText')}
        </motion.p>
      </div>

      <div className="container mt-5">
        <div className="accordion" id="accordionExample">
          {collapseData && collapseData.map((collapse: ICollapse, index: number) => (
              <motion.div
                className="accordion-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                variants={accordionVariants}
                onClick={() => changeActiveCollapse(collapse)}
                key={collapse.nameCollapse}
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapse.nameCollapse}`}
                    aria-expanded="false"
                    aria-controls={collapse.nameCollapse}
                    onClick={() => handleToggle(index)}
                  >
                    <div className="d-flex justify-content-between w-100">
                      <span className={`gradient-text-FAQ ${collapse.active ? 'activeTitle' : ''}`}>
                        {collapse.title}
                      </span>

                      <i className={changeIcon(index)}></i>
                    </div>
                  </button>
                </h2>
                <div
                  id={collapse.nameCollapse}
                  className={`accordion-collapse collapse ${
                    collapse.nameCollapse === "collapseOne" ? "show" : ""
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
