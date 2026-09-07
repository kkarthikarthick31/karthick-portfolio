import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import SectionHeading from './UI/SectionHeading';
import MagneticButton from './UI/MagneticButton';

import {
  IoCheckmark,
  IoCopyOutline,
  IoMailOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

import { MdEmail } from 'react-icons/md';
import confetti from 'canvas-confetti';


// --------------------------------------------------
// SOCIAL ICON MAP
// --------------------------------------------------

const SOCIAL_ICON_MAP = {
  SiGithub: FaGithub,
  SiLinkedin: FaLinkedin,
  MdEmail: MdEmail,
  SiInstagram: FaInstagram,
  SiYoutube: FaYoutube,
  SiX: FaTwitter,
};


// --------------------------------------------------
// CONTACT COMPONENT
// --------------------------------------------------

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);

  const [status, setStatus] = useState({
    state: 'idle',
    message: '',
  });


  // --------------------------------------------------
  // COPY EMAIL
  // --------------------------------------------------

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };


  // --------------------------------------------------
  // FORM CHANGE
  // --------------------------------------------------

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // --------------------------------------------------
  // FORM SUBMIT
  // --------------------------------------------------

  const handleSubmit = (e) => {

    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      setStatus({
        state: 'error',
        message:
          'Please complete all required fields (Name, Email, and Message).',
      });

      return;
    }


    setStatus({
      state: 'submitting',
      message: 'Preparing your dispatch...',
    });


    // --------------------------------------------------
    // CREATE EMAIL
    // --------------------------------------------------

    const subjectEncoded = encodeURIComponent(
      formData.subject ||
      `Portfolio Inquiry from ${formData.name}`
    );

    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

-- Sent via Karthick K Portfolio`
    );


    const mailtoUrl =
      `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;


    // --------------------------------------------------
    // SEND
    // --------------------------------------------------

    setTimeout(() => {

      // Confetti animation
      confetti({
        particleCount: 70,
        spread: 80,
        origin: {
          y: 0.6,
        },
      });


      // Open email client
      window.location.href = mailtoUrl;


      setStatus({
        state: 'success',
        message:
          `Message ready! Opening your email client to send to ${PERSONAL_INFO.email}.`,
      });


      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });


      setTimeout(() => {
        setStatus({
          state: 'idle',
          message: '',
        });
      }, 10000);

    }, 600);
  };


  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >

      {/* Background ambient lighting */}

      <div
        className="
          absolute
          bottom-1/4
          left-1/3
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-cyber-cyan/5
          rounded-full
          blur-[180px]
          pointer-events-none
          -z-10
        "
      />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --------------------------------------------------
            SECTION HEADING
        -------------------------------------------------- */}

        <SectionHeading
          badge="// 09. GET IN TOUCH"
          title="Let's Build"
          highlight="Something Together."
          subtitle="Ready to contribute to backend systems, REST APIs, or full-stack web applications."
        />


        {/* --------------------------------------------------
            MAIN CONTENT
        -------------------------------------------------- */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            max-w-6xl
            mx-auto
          "
        >


          {/* ==================================================
              LEFT COLUMN
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              lg:col-span-5
              flex
              flex-col
              justify-between
            "
          >

            <div>

              {/* STATUS BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3.5
                  py-1.5
                  rounded-full
                  bg-cyber-cyan/10
                  border
                  border-cyber-cyan/30
                  text-cyber-cyan
                  text-xs
                  font-mono
                  mb-6
                "
              >

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-cyber-cyan
                    animate-pulse
                  "
                />

                <span>
                  {PERSONAL_INFO.statusBadge}
                </span>

              </div>


              {/* TITLE */}

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                  font-display
                  mb-4
                "
              >
                Let's discuss full-stack opportunities or technical collaborations.
              </h3>


              {/* DESCRIPTION */}

              <p
                className="
                  text-sm
                  text-slate-400
                  leading-relaxed
                  mb-8
                "
              >
                I am actively seeking entry-level Java Full Stack Developer roles.
                Whether you have an open opportunity, an interesting engineering
                project, or want to review my code, my inbox is open!
              </p>


              {/* ==================================================
                  EMAIL CARD
              ================================================== */}

              <div
                className="
                  p-5
                  rounded-2xl
                  glass-card
                  border
                  border-slate-800
                  mb-8
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    overflow-hidden
                  "
                >

                  {/* EMAIL ICON */}

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-cyber-cyan/10
                      border
                      border-cyber-cyan/20
                      flex
                      items-center
                      justify-center
                      text-cyber-cyan
                      text-xl
                      flex-shrink-0
                    "
                  >
                    <IoMailOutline />
                  </div>


                  {/* EMAIL */}

                  <div className="overflow-hidden">

                    <div
                      className="
                        text-[11px]
                        font-mono
                        text-slate-400
                        uppercase
                      "
                    >
                      Direct Email
                    </div>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="
                        text-xs
                        sm:text-sm
                        font-semibold
                        text-white
                        hover:text-cyber-cyan
                        transition-colors
                        truncate
                        block
                      "
                    >
                      {PERSONAL_INFO.email}
                    </a>

                  </div>

                </div>


                {/* COPY BUTTON */}

                <button
                  onClick={handleCopyEmail}
                  className="
                    px-3
                    py-2
                    rounded-lg
                    bg-dark-850
                    hover:bg-slate-800
                    border
                    border-slate-700
                    text-xs
                    font-mono
                    text-slate-300
                    hover:text-white
                    flex
                    items-center
                    gap-1.5
                    transition-all
                    flex-shrink-0
                  "
                  title="Copy email to clipboard"
                >

                  {copied ? (
                    <>
                      <IoCheckmark
                        className="
                          text-cyber-emerald
                          text-sm
                        "
                      />

                      <span
                        className="
                          text-cyber-emerald
                        "
                      >
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <IoCopyOutline
                        className="text-sm"
                      />

                      <span>
                        Copy
                      </span>
                    </>
                  )}

                </button>

              </div>

            </div>


            {/* ==================================================
                SOCIAL CHANNELS
            ================================================== */}

            <div>

              <div
                className="
                  text-xs
                  font-mono
                  uppercase
                  tracking-widest
                  text-slate-400
                  mb-4
                "
              >
                // Verified Social & Engineering Profiles:
              </div>


              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  gap-3
                "
              >

                {SOCIAL_LINKS.map((link) => {

                  const Icon =
                    SOCIAL_ICON_MAP[link.icon] ||
                    MdEmail;

                  return (

                    <a
                      key={link.name}
                      href={link.url}
                      target={
                        link.active
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        link.active
                          ? "noopener noreferrer"
                          : undefined
                      }

                      onClick={(e) => {

                        if (!link.active) {

                          e.preventDefault();

                          alert(
                            `${link.name} handle is configured as a placeholder: ${link.handle}.`
                          );

                        }

                      }}

                      className="
                        p-3
                        rounded-xl
                        bg-dark-850/80
                        border
                        border-slate-800
                        hover:border-cyber-cyan/40
                        flex
                        items-center
                        gap-2.5
                        transition-all
                        group
                      "
                    >

                      <Icon
                        className="
                          text-base
                          text-slate-400
                          group-hover:text-cyber-cyan
                          group-hover:scale-110
                          transition-all
                        "
                      />


                      <div className="truncate">

                        <div
                          className="
                            text-xs
                            font-bold
                            text-slate-200
                            group-hover:text-white
                            truncate
                          "
                        >
                          {link.name}
                        </div>

                        <div
                          className="
                            text-[10px]
                            font-mono
                            text-slate-500
                            truncate
                          "
                        >
                          {link.active
                            ? 'Verified'
                            : 'Placeholder'}
                        </div>

                      </div>

                    </a>

                  );

                })}

              </div>

            </div>

          </motion.div>


          {/* ==================================================
              RIGHT COLUMN - CONTACT FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-7"
          >

            <form
              onSubmit={handleSubmit}
              className="
                glass-panel
                p-8
                sm:p-10
                rounded-3xl
                border
                border-slate-800
                shadow-2xl
                relative
              "
            >

              {/* FORM HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  pb-6
                  mb-6
                  border-b
                  border-slate-800
                  text-xs
                  font-mono
                "
              >

                <span className="text-slate-400">
                  // CONTACT_DISPATCH_FORM
                </span>

                <span className="text-cyber-cyan">
                  ENDPOINT: ACTIVE
                </span>

              </div>


              {/* STATUS */}

              {status.state !== 'idle' && (

                <div
                  className={`
                    p-4
                    rounded-xl
                    text-xs
                    font-mono
                    mb-6

                    ${
                      status.state === 'success'
                        ? 'bg-cyber-emerald/15 border border-cyber-emerald/40 text-cyber-emerald'
                        : status.state === 'error'
                        ? 'bg-red-500/15 border border-red-500/40 text-red-300'
                        : 'bg-cyber-blue/15 border border-cyber-blue/40 text-cyber-blue'
                    }
                  `}
                >
                  {status.message}
                </div>

              )}


              {/* FORM FIELDS */}

              <div className="space-y-4">

                {/* NAME + EMAIL */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                  "
                >

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="name"
                      className="
                        block
                        text-xs
                        font-mono
                        text-slate-400
                        mb-1.5
                      "
                    >
                      Your Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-dark-950/70
                        border
                        border-slate-800
                        text-white
                        placeholder-slate-600
                        text-sm
                        focus:outline-none
                        focus:border-cyber-cyan
                        focus:ring-1
                        focus:ring-cyber-cyan
                        transition-colors
                      "
                    />

                  </div>


                  {/* EMAIL */}

                  <div>

                    <label
                      htmlFor="email"
                      className="
                        block
                        text-xs
                        font-mono
                        text-slate-400
                        mb-1.5
                      "
                    >
                      Your Email *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      required
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-dark-950/70
                        border
                        border-slate-800
                        text-white
                        placeholder-slate-600
                        text-sm
                        focus:outline-none
                        focus:border-cyber-cyan
                        focus:ring-1
                        focus:ring-cyber-cyan
                        transition-colors
                      "
                    />

                  </div>

                </div>


                {/* SUBJECT */}

                <div>

                  <label
                    htmlFor="subject"
                    className="
                      block
                      text-xs
                      font-mono
                      text-slate-400
                      mb-1.5
                    "
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-dark-950/70
                      border
                      border-slate-800
                      text-white
                      placeholder-slate-600
                      text-sm
                      focus:outline-none
                      focus:border-cyber-cyan
                      focus:ring-1
                      focus:ring-cyber-cyan
                      transition-colors
                    "
                  />

                </div>


                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="message"
                    className="
                      block
                      text-xs
                      font-mono
                      text-slate-400
                      mb-1.5
                    "
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, team requirements, or role details..."
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-dark-950/70
                      border
                      border-slate-800
                      text-white
                      placeholder-slate-600
                      text-sm
                      focus:outline-none
                      focus:border-cyber-cyan
                      focus:ring-1
                      focus:ring-cyber-cyan
                      transition-colors
                      resize-none
                    "
                  />

                </div>

              </div>


              {/* ==================================================
                  SUBMIT BUTTON
              ================================================== */}

              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-[11px]
                    font-mono
                    text-slate-500
                  "
                >
                  Sends directly to Karthick's inbox
                </span>


                <MagneticButton
                  type="submit"
                  variant="primary"
                  className="px-8"
                  disabled={
                    status.state === 'submitting'
                  }
                >

                  <span>
                    {status.state === 'submitting'
                      ? 'Sending...'
                      : 'Send Message'}
                  </span>

                  <IoPaperPlaneOutline
                    className="
                      text-base
                      text-dark-950
                    "
                  />

                </MagneticButton>

              </div>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}