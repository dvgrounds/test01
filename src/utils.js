export function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve();
        console.log("resolved");
      } else {
        // reject(new Error("Invalid Email or Password"));
      }
    }, 3000);
  });
}
