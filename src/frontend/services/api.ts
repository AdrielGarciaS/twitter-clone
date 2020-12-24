export const api = async (
  url: string,
  data?: Record<string, unknown>,
): Promise<any> => {
  const response = await fetch(`http://localhost:3000/api/${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const parsedResponse = response.json()

  return parsedResponse
}
