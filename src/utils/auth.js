export async function completeReg(url, data) {
  // return authorization header with basic auth credentials
  let user = JSON.parse(localStorage.getItem("token"));

  if (user && user.token) {
    const bearerHeader = {
      Method: "POST",
      Authorization: "Bearer " + user.token,
      body: JSON.stringify(data),
    };

    const responseData = await fetch(url, bearerHeader);
    const json = await responseData.json();
    return json;
  } else {
    return {};
  }
}
