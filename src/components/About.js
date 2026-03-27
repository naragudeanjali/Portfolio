import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Professional Summary</h2>

      <p>
        Results-driven DevOps Engineer with 3+ years of experience in cloud 
        infrastructure management, CI/CD automation, and containerized deployments.
      </p>

      <p>
        Strong expertise in AWS, Terraform, Jenkins, Docker, Kubernetes, and Ansible.
        Proven ability to design scalable, secure, and highly available systems,
        improving deployment efficiency by 40%.
      </p>

      <p>
        Experienced in monitoring, incident management, and Agile environments.
      </p>
    </motion.section>
  );
}

export default About;