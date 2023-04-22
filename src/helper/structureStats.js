export const structureStats = (stats) => {
  return {
    totalProjects: stats.totalProjects.toNumber(),
    totalInvestors: stats.totalInvestors.toNumber(),
    totalDonations: stats.totalDonations.toNumber(),
  };
};
