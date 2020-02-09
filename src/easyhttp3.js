/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author Stavros Kefaleas
 * @license MIT
 *
 */

export default class EasyHTTP {
  /**
   * Make an HTTP GET Request
   * This is a function
   * @param {string} url - Url to hit the api
   * @returns {Promise<any>}
   */
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();

    return resData;
  }

  /**
   * Make an HTTP POST Request
   * This is a function
   * @param {string} url - Url to hit the api
   * @param {any} data - data for record creation
   * @returns {Promise<any>}
   */
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();

    return resData;
  }

  /**
   * Make an HTTP PUT Request
   * This is a function
   * @param {string} url - Url to hit the api
   * @param {any} data - data for record update
   * @returns {Promise<any>}
   */
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();

    return resData;
  }

  /**
   * Make an HTTP PUT Request
   * This is a function
   * @param {string} url - Url to hit the api
   *
   * @returns {Promise<any>}
   */
  async delete(url) {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    return 'Resource Deleted...';
  }
}
