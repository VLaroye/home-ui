import client from '../plugins/axios';

export const startScenario = async (id: number): Promise<any> => {
  try {
    const response = await client.get('/', {
      params: { type: 'scenario', id, action: 'start' },
    });

    if (
      typeof response.data === 'string' &&
      response.data.startsWith("Aucune commande correspondant à l'ID")
    ) {
      throw new Error('command not found');
    }

    return response.data;
  } catch (err: any) {
    console.error(err);
    return err;
  }
};
