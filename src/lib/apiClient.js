export const mockLogin = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@brandku.com" && password === "password123") {
        resolve({ id: 1, name: "User BrandKu", email: "user@brandku.com" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};