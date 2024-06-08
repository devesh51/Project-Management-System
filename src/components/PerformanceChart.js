import React from "react";
import { useSelector } from "react-redux";

const PerformanceChart = ({ projectID }) => {
  const projectDetails = useSelector((store) => store.projectStore.projects);
  const selectedProject = projectDetails.find((proj) => proj.id === projectID);
  const ProjectTask = selectedProject.tasks;

  const completedTasks = ProjectTask.filter((task) => task.isCompleted).length;
  const incompleteTasks = ProjectTask.length - completedTasks;

  const taskData = [
    { value: completedTasks, label: "Completed Tasks", color: "#00C853" },
    { value: incompleteTasks, label: "Incomplete Tasks", color: "#FF9900" },
  ];

  const total = taskData.reduce((acc, curr) => acc + curr.value, 0); // Calculate total tasks

  const renderSlice = (data, index) => {
    const angle = (data.value / total) * 360; // Calculate slice angle in degrees
    const startAngle =
      index === 0
        ? 0
        : taskData
            .slice(0, index)
            .reduce((acc, curr) => acc + (curr.value / total) * 360, 0);
    const endAngle = startAngle + angle;

    const radius = 50; // Radius of the pie chart
    const centerX = radius; // Center X coordinate
    const centerY = radius; // Center Y coordinate

    // Convert angles to radians
    const startAngleRad = ((startAngle - 90) * Math.PI) / 180;
    const endAngleRad = ((endAngle - 90) * Math.PI) / 180;

    // Calculate path for arc segment
    const startX = centerX + radius * Math.cos(startAngleRad);
    const startY = centerY + radius * Math.sin(startAngleRad);
    const endX = centerX + radius * Math.cos(endAngleRad);
    const endY = centerY + radius * Math.sin(endAngleRad);

    const largeArcFlag = angle > 180 ? 1 : 0; // Determine if arc should be greater than 180 degrees

    const path = `
      M ${centerX},${centerY}
      L ${startX},${startY}
      A ${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}
      Z
    `;

    return <path key={index} fill={data.color} d={path} />;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Task Completion Status</h2>
      <svg width="100" height="100">
        {taskData.map(renderSlice)}
      </svg>
      <ul>
        {taskData.map((data) => (
          <li key={data.label} style={{ color: data.color }}>
            {data.label}: {data.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceChart;
