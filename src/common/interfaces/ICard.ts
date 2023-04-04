interface ICard {
  readonly id: number;
  readonly url: string;
  readonly title: string;
  readonly price: number;
  readonly dateFrom: string;
  readonly dateTo: string;
  readonly count: number;
}

interface IChangeCard {
  id?: number | null;
  url?: string;
  title?: string;
  price?: number | null;
  dateFrom?: string;
  dateTo?: string;
  count?: number | null;
}

export type { ICard, IChangeCard };
