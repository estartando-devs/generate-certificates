export const api = async <T> (url: RequestInfo, requestInit?: RequestInit): Promise<T>=> {
  const baseUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

  const response = await fetch(`${baseUrl}${url}`, requestInit);

  const data = await response.text();

  return JSON.parse(data) ;
}