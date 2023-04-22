import { toDate } from "./toDate";

export const structuredProjects = (projects) =>
  projects
    .map((project) => ({
      id: project.id.toNumber(),
      owner: project.owner,
      title: project.title,
      description: project.description,
      timestamp: new Date(project.timestamp.toNumber()).getTime(),
      expiresAt: new Date(project.expiresAt.toNumber()).getTime(),
      date: toDate(project.expiresAt.toNumber() * 1000),
      imageUrl: project.imageUrl,
      organizationType: project.organizationType,
      raised: parseInt(project.raised._hex) / 10 ** 18,
      goal: parseInt(project.goal._hex) / 10 ** 18,
      investors: project.investors.toNumber(),
      status: project.status,
    }))
    .reverse();
