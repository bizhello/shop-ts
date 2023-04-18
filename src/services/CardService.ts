import { ICard, ICardDto } from "../common/interfaces/ICard"
import api from "../configs/api";
export default class CardService {


  static async getCards(): Promise<ICard[]> {
    const response: Response = await fetch(`${api.baseUrl}cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('access-token')}`
      },
    })

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  static async incrementCard(idCard: string): Promise<{ status: string } | string> {
    const response = await fetch(`${api.baseUrl}cards/${idCard}/increment`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('access-token')}`
      },
    })

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  static async decrementCard(idCard: string): Promise<{ status: string } | string> {
    const response = await fetch(`${api.baseUrl}cards/${idCard}/decrement`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('access-token')}`
      },
    })

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  static async removeCard(idCard: string): Promise<{ message: string } | string> {
    const response = await fetch(`${api.baseUrl}cards/${idCard}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('access-token')}`
      },
    })

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  static async changeCard(card: ICard): Promise<ICard> {
    const { id, title, price, dateFrom, dateTo, count } = card;
    const response = await fetch(`${api.baseUrl}cards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('access-token')}`
      },
      body: JSON.stringify({ title, price, dateFrom, dateTo, count })
    })

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  static async createCard(body: ICardDto): Promise<ICard> {
    const response = await fetch(`${api.baseUrl}cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('access-token')}`
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

}
