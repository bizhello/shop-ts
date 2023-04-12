import { ICard, ICardDto } from "../common/interfaces/ICard"

export default class CardService {

  static async getCards(): Promise<ICard[]> {
    const response = await fetch('http://localhost:5555/cards', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "include", // include, *same-origin, omit
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

  static async incrementCard(idCard: string): Promise<{ status: string } | string> {
    const response = await fetch(`http://localhost:5555/cards/${idCard}/increment`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
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

  static async decrementCard(idCard: string): Promise<{ status: string } | string> {
    const response = await fetch(`http://localhost:5555/cards/${idCard}/decrement`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
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

  static async removeCard(idCard: string): Promise<{ message: string } | string> {
    const response = await fetch(`http://localhost:5555/cards/${idCard}`, {
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

  static async changeCard(card: ICard): Promise<ICard> {
    const { id, title, price, dateFrom, dateTo, count } = card;
    const response = await fetch(`http://localhost:5555/cards/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI0MDg4MDIxYmFlNWMxMGQ1MDU5YmEiLCJpYXQiOjE2ODExMzU2MDMsImV4cCI6MTY4MTEzNzQwM30.4Tfhe4M5_fCALiO9lOjpS5Mf1YXF4iNn3sA99-738bM'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, price, dateFrom, dateTo, count })
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

  static async createCard(body: ICardDto): Promise<ICard> {
    const response = await fetch(`http://localhost:5555/cards`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI0MDg4MDIxYmFlNWMxMGQ1MDU5YmEiLCJpYXQiOjE2ODExMzU2MDMsImV4cCI6MTY4MTEzNzQwM30.4Tfhe4M5_fCALiO9lOjpS5Mf1YXF4iNn3sA99-738bM'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body)
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
