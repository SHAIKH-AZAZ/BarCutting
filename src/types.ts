export interface RawDataRow {
  "Sl no": string;
  "Dia": number;
  "Total Bars": number;
  "Cutting Length": number;
  "Element": string;
}

export interface ResultRow {
  group: string;
  cuttingLengths: number[];
  barCount: number;
  totalLength: number;
  wastage: number;
  barId: string;
}
