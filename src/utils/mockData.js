const mockData = {
  Sales: { revenue: 5000, growth: 12, profit: 1500 },
  Marketing: { budget: 3000, engagement: 8, leads: 120 },
  Finance: { expenses: 7000, investments: 500, profit: 2500 },
};

export const fetchMockData = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData[query] || { message: "No data found!" });
    }, 1000);
  });
};
