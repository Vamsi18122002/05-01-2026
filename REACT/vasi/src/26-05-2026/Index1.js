function customAllSettled(promises) {
  return Promise.all(
    promises.map((promise) =>
      Promise.resolve(promise)
        .then((result) => ({
          status: "fulfilled",
          value: result,
        }))
        .catch((error) => ({
          status: "rejected",
          reason: error,
        }))
    )
  );
}

const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");

customAllSettled([p1, p2]).then((result) => {
  console.log(result);
});