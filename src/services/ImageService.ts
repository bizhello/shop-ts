export default class ImageService {
  public static async createImageCard(
    idCard: string,
    formData: FormData,
  ): Promise<{ url: string; idCard: string }> {
    const response = await fetch(`http://localhost:5555/images/${idCard}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        //"Content-type": "multipart/form-data", // application/json
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI0MDg4MDIxYmFlNWMxMGQ1MDU5YmEiLCJpYXQiOjE2ODExMzU2MDMsImV4cCI6MTY4MTEzNzQwM30.4Tfhe4M5_fCALiO9lOjpS5Mf1YXF4iNn3sA99-738bM'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
      // throw new Error(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  static async removeCardImage(idCard: string): Promise<{ cardId: string } | string> {
    const response = await fetch(`http://localhost:5555/images/${idCard}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI0MDg4MDIxYmFlNWMxMGQ1MDU5YmEiLCJpYXQiOjE2ODExMzU2MDMsImV4cCI6MTY4MTEzNzQwM30.4Tfhe4M5_fCALiO9lOjpS5Mf1YXF4iNn3sA99-738bM'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
      // throw new Error(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  // static async deleteImageById(cardId) {
  //   return $api.delete(`/images/${cardId}`);
  // }

  // static async createImageById(cardId, body) {
  //   return axios.post(
  //     `${process.env.REACT_APP_API_URL}/images/${cardId}`,
  //     body,
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  //       },
  //     },
  //   );
  // }
}
