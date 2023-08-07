import { readFile } from 'node:fs/promises';

export async function getData() {
    const result = await readFile('./data.json', 'utf8');
    const dataJson = JSON.parse(result);
    return dataJson;
}
