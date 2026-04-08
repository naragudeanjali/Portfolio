import React from "react";

const Projects = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Projects</h2>

      {/* CXP Portal */}
      <div style={{ marginBottom: "20px" }}>
        <h3>CXP Portal | Client: Cisco | Role: DevOps Engineer</h3>
        <p>
          Migrated application from on-premise to Kubernetes-based AWS architecture
          for scalability, reliability, and performance.
        </p>
        <ul>
          <li>Built CI/CD pipelines using Jenkins</li>
          <li>Containerized applications using Docker</li>
          <li>Deployed applications on Kubernetes (EKS)</li>
          <li>Automated deployments using Ansible</li>
          <li>Provisioned infrastructure using Terraform</li>
          <li>Used AWS services (S3, IAM, CloudFront, Aurora)</li>
          <li>Implemented monitoring using Prometheus & Grafana</li>
          <li>Resolved production issues</li>
        </ul>
      </div>

      {/* Novartis Project */}
      <div>
        <h3>Novartis Healthcare | Client: Novartis | Role: DevOps Engineer</h3>
        <p>
          Worked on CI/CD automation, code quality, and AWS deployments for
          healthcare applications.
        </p>
        <ul>
          <li>Managed Git branching and merging</li>
          <li>Built artifacts using Maven</li>
          <li>Implemented CI pipelines in Jenkins</li>
          <li>Integrated SonarQube and Nexus</li>
          <li>Deployed applications on AWS (EC2, S3, RDS)</li>
          <li>Managed IAM, VPC, CloudWatch</li>
          <li>Handled multi-environment deployments</li>
          <li>Troubleshot build and application issues</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;