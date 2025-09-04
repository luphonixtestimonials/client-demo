
// Static site - no API calls needed
// This file is kept for future API integration if needed

export const apiClient = {
  // Placeholder for future API integration
  get: async (endpoint: string) => {
    console.log(`Static site - GET ${endpoint} would be called here`);
    return Promise.resolve({});
  },
  
  post: async (endpoint: string, data: any) => {
    console.log(`Static site - POST ${endpoint} with data:`, data);
    return Promise.resolve({});
  }
};
