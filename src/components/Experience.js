import React from "react";

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <h3>DevOps Engineer - Intenso Tech Solution Pvt Ltd</h3>
      <p>Jan 2023 – Present</p>

      <ul>
        <li>Designed and managed scalable AWS infrastructure ensuring high availability.</li>
        <li>Built CI/CD pipelines using Jenkins integrating Git, Maven, SonarQube, Nexus.</li>
        <li>Automated infrastructure provisioning using Terraform (reduced setup time by 60%).</li>
        <li>Developed reusable Terraform modules (VPC, EC2, ALB, IAM).</li>
        <li>Deployed applications using Docker & Kubernetes.</li>
        <li>Implemented monitoring using CloudWatch, Prometheus, Grafana.</li>
        <li>Applied AWS security best practices (IAM, VPC).</li>
        <li>Configured Auto Scaling and Load Balancers.</li>
        <li>Managed backups (EBS, AMI) and disaster recovery.</li>
        <li>Collaborated with Dev & QA teams.</li>
        <li>Handled incident management & root cause analysis.</li>
        <li>Provided 24/7 production support.</li>
      </ul>
    </section>
  );
}

export default Experience;