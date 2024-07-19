export interface Event {
    id: number;
    name: string;
    type: string;
    startDate: Date | null;
    endDate: Date | null;
    description: string;
    handledBy: string;
    organisation: string;
    subEvents: number;
  }
  