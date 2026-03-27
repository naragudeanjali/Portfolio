import React from "react";

function Skills() {
  return (
     <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <h3>Cloud Platforms</h3>
      <p>AWS (EC2, S3, RDS, VPC, IAM, Route53, CloudFront, Auto Scaling, ELB, CloudWatch), Azure</p>

      <h3>CI/CD & DevOps Tools</h3>
      <p>Jenkins (Declarative & Scripted Pipelines), GitHub, Git, Maven, Nexus, SonarQube, GitHub Actions</p>

      <h3>Infrastructure as Code</h3>
      <p>Terraform (Modules, Remote Backend, State Management), CloudFormation (Basic)</p>

      <h3>Containerization</h3>
      <p>Docker, Kubernetes (EKS - Basic)</p>

      <h3>Configuration Management</h3>
      <p>Ansible (Playbooks, Roles, Inventory)</p>

      <h3>Monitoring</h3>
      <p>CloudWatch, Prometheus, Grafana, ELK (Basic)</p>

      <h3>Scripting & OS</h3>
      <p>Bash, Linux (RHEL, Ubuntu, CentOS)</p>

      <h3>Other</h3>
      <p>AWS Networking, Microservices, Agile/Scrum, Incident Management</p>
    </section>
  );
}

export default Skills;