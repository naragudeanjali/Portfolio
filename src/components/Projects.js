import React from "react";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div>
        <h3>Cloud-Based DevOps Automation</h3>
        <ul>
          <li>Built complete CI/CD pipeline from code commit to production</li>
          <li>Provisioned AWS infrastructure using Terraform (S3 backend)</li>
          <li>Deployed microservices on Kubernetes</li>
          <li>Implemented rolling & blue-green deployments</li>
          <li>Improved deployment speed by 40%</li>
        </ul>
      </div>

      <div>
        <h3>CI/CD for Java Application</h3>
        <ul>
          <li>Developed Jenkins pipelines for automation</li>
          <li>Used Ansible for configuration management</li>
          <li>Managed Git branching & merging</li>
          <li>Dockerized applications</li>
          <li>Supported dev, test, production environments</li>
        </ul>
      </div>

    </section>
  );
}

export default Projects;