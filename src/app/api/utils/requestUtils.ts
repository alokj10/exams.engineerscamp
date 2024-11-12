export async function getQueryParams(req: Request) {
  const url = new URL(req.url);
  const params = url.searchParams;
  const queryParams: Record<string, string> = {};
  params.forEach((value, key) => {
    queryParams[key] = value;
  });
  return queryParams;
}

export async function getRequestBody(req: Request) {
  const reqBody = await req.json();
  return reqBody;
}