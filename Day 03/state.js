function showState(request) {
    switch (request.state) {
        case "idle":
            return "not requested yet";
        case "loading":
            return "request is sent and response is loading";
        case "success":
            return "data successfully received: " + request.data;
        case "error":
            return "error encountered: " + request.message;
    }
}
// returning state of the api request
const a = {
    state: "idle"
};
const b = {
    state: "loading"
};
const c = {
    state: "success",
    data: "Hello"
};
const d = {
    state: "error",
    message: "network issue"
};
const e = {
    state: "success",
    data: ["Hello", "World"]
};
// returning state of the api request
console.log(showState(a));
console.log(showState(b));
console.log(showState(c));
console.log(showState(d));
console.log(showState(e));
export {};
