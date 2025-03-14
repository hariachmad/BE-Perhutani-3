import { getDataDto } from '../dto/getData.dto';

import axios from 'axios';

export async function fetchData(): Promise<getDataDto[] | undefined> {
  try {
    const response: any = await axios.get(
      'http://localhost:4000/penerimaan-getah',
    );
    if (!response.data) {
      throw new Error('response.data tidak ada');
    }
    const dataPenerimaanGetah: getDataDto[] = response.data;
    return dataPenerimaanGetah;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
