interface ICard {
  readonly id: number;
  readonly url: string;
  readonly title: string;
  readonly price: number;
  readonly dateFrom: Date;
  readonly dateTo: Date;
  readonly count: number;
}

interface IChangeCard {
  id?: number | null;
  url?: string;
  title?: string;
  price?: number | null;
  dateFrom?: Date | null;
  dateTo?: Date | null;
  count?: number | null;
}

export type { ICard, IChangeCard };
