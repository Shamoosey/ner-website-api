import { cache } from "./cache.client";
import sheets, { SPREADSHEET_ID } from "./sheets.client";

export async function getRows(sheetName: string): Promise<string[][]> {
  const cacheKey = `sheet:${sheetName}`;
  const cached = cache.get<string[][]>(cacheKey);

  if (cached) return cached;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A2:Z`,
  });

  const rows = (response.data.values as string[][]) ?? [];
  cache.set(cacheKey, rows);
  return rows;
}
