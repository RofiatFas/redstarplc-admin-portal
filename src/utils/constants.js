const baseUrl = 'http://20.106.202.171:86/swagger/index.html';

let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("nepal-token")}`
    }
  };

export const constants = {
    baseUrl,
    axiosConfig
}