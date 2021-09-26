import axios from "axios";

export class Services {
  static async registerUser(data) {
    try {
      const response = await axios({
        method: `POST`,
        url: `http://localhost:5000/api/register`,
        data,
      });
      return response;
    } catch (err) {
      throw new Error(
        `${err.response.statusText} - ${err.response.data.message}`
      );
    }
  }

  static async verify(data) {
    try {
      const response = await axios({
        method: `POST`,
        url: `http://localhost:5000/api/verify`,
        data,
      });
      return response;
    } catch (err) {
      throw new Error(
        `${err.response.statusText} - ${err.response.data.message}`
      );
    }
  }
}
