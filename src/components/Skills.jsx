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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
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

        {/* SECTION HEADER */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">MY EXPERTISE</span>

          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>

          <p className="section-description">
            Technologies and tools I use to build reliable,
            scalable and modern applications.
          </p>
        </motion.div>

        {/* SKILL CATEGORIES */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {skills.map((group, groupIndex) => (
            <motion.div
              className="skill-category"
              variants={cardVariants}
              key={groupIndex}
            >

              {/* CATEGORY TITLE */}
              <div className="skill-category-title">
                <span className="category-number">
                  0{groupIndex + 1}
                </span>

                <h3>{group.category}</h3>
              </div>

              {/* SKILL ITEMS */}
              <div className="skill-items">
                {group.items.map((skill, index) => {

                  const Icon =
                    ICON_MAP[skill.icon] || TbCode;

                  return (
                    <motion.div
                      className="skill-card"
                      key={index}
                      whileHover={{
                        y: -6,
                        scale: 1.03,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >

                      <div className="skill-icon">
                        <Icon size={28} />
                      </div>

                      <span className="skill-name">
                        {skill.name}
                      </span>

                    </motion.div>
                  );
                })}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;