export default function(promise,timeout) {
    return new Promise((resolve,reject) => {
        let method;
        let value;
        let timeoutPassed = false;
        setTimeout(() => ((timeoutPassed = true) && method && method(value)),timeout);

        promise.then(
            (result) => (timeoutPassed ? resolve(result) : (method = resolve) && (value = result)),
            (result) => (timeoutPassed ? reject(result) : (method = reject) && (value = result))
        );
    });
}
