import React from "react";
import { motion } from "framer-motion";

import {
  SiOpenjdk,
  SiJavascript,
  SiMysql,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiJsonwebtokens,
  SiReact,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiApachemaven,
} from "react-icons/si";

import { TbCode } from "react-icons/tb";

// --------------------------------------------------
// ICON MAP
// --------------------------------------------------

const ICON_MAP = {
  SiOpenjdk: SiOpenjdk,
  SiJavascript: SiJavascript,
  SiMysql: SiMysql,
  SiSpringboot: SiSpringboot,
  SiSpring: SiSpring,
  SiHibernate: SiHibernate,
  SiJsonwebtokens: SiJsonwebtokens,
  SiReact: SiReact,
  SiHtml5: SiHtml5,
  SiCss: SiCss,
  SiPostgresql: SiPostgresql,
  SiGit: SiGit,
  SiGithub: SiGithub,
  SiPostman: SiPostman,
  SiApachemaven: SiApachemaven,
};

// --------------------------------------------------
// SKILLS DATA
// --------------------------------------------------

const skills = [
  {
    category: "Programming Languages",
    items: [
      {
        name: "Java",
        icon: "SiOpenjdk",
      },
      {
        name: "JavaScript",
        icon: "SiJavascript",
      },
      {
        name: "SQL",
        icon: "TbCode",
      },
    ],
  },

  {
    category: "Backend Development",
    items: [
      {
        name: "Spring Boot",
        icon: "SiSpringboot",
      },
      {
        name: "Spring MVC",
        icon: "SiSpring",
      },
      {
        name: "Spring Security",
        icon: "TbCode",
      },
      {
        name: "Spring Data JPA",
        icon: "TbCode",
      },
      {
        name: "Hibernate",
        icon: "SiHibernate",
      },
      {
        name: "REST APIs",
        icon: "TbCode",
      },
      {
        name: "JWT",
        icon: "SiJsonwebtokens",
      },
    ],
  },

  {
    category: "Frontend Development",
    items: [
      {
        name: "ReactJS",
        icon: "SiReact",
      },
      {
        name: "HTML5",
        icon: "SiHtml5",
      },
      {
        name: "CSS3",
        icon: "SiCss",
      },
    ],
  },

  {
    category: "Databases",
    items: [
      {
        name: "MySQL",
        icon: "SiMysql",
      },
      {
        name: "PostgreSQL",
        icon: "SiPostgresql",
      },
      {
        name: "JDBC",
        icon: "TbCode",
      },
    ],
  },

  {
    category: "Tools & Technologies",
    items: [
      {
        name: "Git",
        icon: "SiGit",
      },
      {
        name: "GitHub",
        icon: "SiGithub",
      },
      {
        name: "Postman",
        icon: "SiPostman",
      },
      {
        name: "Maven",
        icon: "SiApachemaven",
      },
      {
        name: "VS Code",
        icon: "TbCode",
      },
      {
        name: "Eclipse",
        icon: "TbCode",
      },
    ],
  },

  {
    category: "Core Concepts",
    items: [
      {
        name: "OOP",
        icon: "TbCode",
      },
      {
        name: "Data Structures",
        icon: "TbCode",
      },
      {
        name: "Collections",
        icon: "TbCode",
      },
      {
        name: "MVC Architecture",
        icon: "TbCode",
      },
      {
        name: "Exception Handling",
        icon: "TbCode",
      },
      {
        name: "Authentication & Authorization",
        icon: "TbCode",
      },
    ],
  },
];

// --------------------------------------------------
// ANIMATION VARIANTS
// --------------------------------------------------

// Main category animation
const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

// Individual skill animation
const skillVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Skill items stagger
const skillItemsVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

// Main categories stagger
const categoriesContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// --------------------------------------------------
// SKILLS COMPONENT
// --------------------------------------------------

const Skills = () => {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        {/* ------------------------------------------ */}
        {/* SECTION HEADER */}
        {/* ------------------------------------------ */}

        <motion.div
          className="section-header"
          initial={{
            opacity: 0,
            y: -35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span className="section-label">
            MY EXPERTISE
          </span>

          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>

          <p className="section-description">
            Technologies and tools I use to build reliable,
            scalable and modern applications.
          </p>
        </motion.div>

        {/* ------------------------------------------ */}
        {/* SKILL CATEGORIES */}
        {/* ------------------------------------------ */}

        <motion.div
          className="skills-grid"
          variants={categoriesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {skills.map((group, groupIndex) => (

            <motion.div
              className="skill-category"
              variants={categoryVariants}
              key={group.category}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.25,
                },
              }}
            >

              {/* ------------------------------------ */}
              {/* CATEGORY TITLE */}
              {/* ------------------------------------ */}

              <div className="skill-category-title">

                <span className="category-number">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>

                <h3>
                  {group.category}
                </h3>

              </div>

              {/* ------------------------------------ */}
              {/* SKILL ITEMS */}
              {/* ------------------------------------ */}

              <motion.div
                className="skill-items"
                variants={skillItemsVariants}
              >

                {group.items.map((skill, index) => {

                  const Icon =
                    ICON_MAP[skill.icon] || TbCode;

                  return (

                    <motion.div
                      className="skill-card"
                      variants={skillVariants}
                      key={`${group.category}-${skill.name}`}
                      whileHover={{
                        y: -7,
                        scale: 1.035,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >

                      {/* ICON */}

                      <motion.div
                        className="skill-icon"
                        whileHover={{
                          rotate: [0, -5, 5, 0],
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                      >
                        <Icon size={28} />
                      </motion.div>

                      {/* NAME */}

                      <span className="skill-name">
                        {skill.name}
                      </span>

                    </motion.div>

                  );
                })}

              </motion.div>

            </motion.div>

          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default Skills;