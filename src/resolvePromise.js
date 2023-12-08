// used to control if the the promise we got is empty or not
export default function resolvePromise(prms, promiseState) {
  // Kontrollerar om det inkommande löftet är null
  if (!prms) {
    // Sätter ett felmeddelande i promiseState.error om löftet är null
    promiseState.error = new Error("Promise is null");
    return; // Avbryt funktionen om löftet är null
  }
  // Sätter det inkommande löftet i promiseState
  promiseState.promise = prms;
  // Återställer data och felmeddelande till null
  promiseState.data = null;
  promiseState.error = null;
  // Hanterar löftets lyckade uppfyllandet
  prms
    .then((data) => {
      if (promiseState.promise === prms) {
        // Sätter löftets data i promiseState om löftet fortfarande är aktivt
        promiseState.data = data;
      }
    })
    // Hanterar löftets avvisande
    .catch((error) => {
      if (promiseState.promise === prms) {
        // Sätter löftets avvisningsfel i promiseState om löftet fortfarande är aktivt
        promiseState.error = error;
      }
    });
}
