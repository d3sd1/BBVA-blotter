export class Blotter {
  id: number;
  type: string;
  client: string;
  state: string;
  status: string;
  process: string;
  format: string;
  currency: string;
  description: string;

  constructor(id: number, type: string, client: string, state: string, status: string, process: string, format: string, currency: string, description: string) {
    this.id = id;
    this.type = type;
    this.client = client;
    this.state = state;
    this.status = status;
    this.process = process;
    this.format = format;
    this.currency = currency;
    this.description = description;
  }
}
