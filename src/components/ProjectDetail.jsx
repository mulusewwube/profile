import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { projectId } = useParams(); // Get the project ID from the URL

  // Here, you can fetch the details of the project based on projectId or use conditional rendering
  return (
    <div>
      <h2>Project Details: {projectId}</h2>
      {/* Render project details based on projectId */}
    </div>
  );
}

export default ProjectDetail;
