import httpService from "./httpService";

export async function getData(isbn) {
  const apiEndpoint = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
  const { data: isbnresult } = await httpService.get(apiEndpoint + isbn);

  return isbnresult;
}
