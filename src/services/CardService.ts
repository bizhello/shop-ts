/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable @typescript-eslint/explicit-member-accessibility */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable prettier/prettier */
import { ICard } from "../common/interfaces/ICard"

export default class CardService {

  static async getCards(): Promise<ICard[]> {
    const response = await fetch('http://localhost:5555/cards', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI0MDg4MDIxYmFlNWMxMGQ1MDU5YmEiLCJpYXQiOjE2ODA4ODQ3MDAsImV4cCI6MTY4MDg4NjUwMH0.RGxWhh6jVeIVYdPs1RjL-OClK9Jo3gzB8_XEeS-Qwi0'
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

  static async cardIncrement(idCard: number): Promise<{ status: string } | string> {
    const response = await fetch(`http://localhost:5555/cards/${idCard}/increment`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI0MDg4MDIxYmFlNWMxMGQ1MDU5YmEiLCJpYXQiOjE2ODA4ODQ3MDAsImV4cCI6MTY4MDg4NjUwMH0.RGxWhh6jVeIVYdPs1RjL-OClK9Jo3gzB8_XEeS-Qwi0'
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

  static async cardDecrement(idCard: number): Promise<{ status: string } | string> {
    const response = await fetch(`http://localhost:5555/cards/${idCard}/decrement`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI0MDg4MDIxYmFlNWMxMGQ1MDU5YmEiLCJpYXQiOjE2ODA4ODQ3MDAsImV4cCI6MTY4MDg4NjUwMH0.RGxWhh6jVeIVYdPs1RjL-OClK9Jo3gzB8_XEeS-Qwi0'
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

}
