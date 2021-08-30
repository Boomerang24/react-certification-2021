export default async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "wizeline" && password === "Rocks!") {
        return resolve({
          username: "wizeline",
          password: "Rocks!",
          authMock: "true",
        });
      }
      return reject(new Error("Username or password invalid"));
    }, 500);
  });
}
