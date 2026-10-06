import { RequestState } from "./types/State";

function showState<T>(request: RequestState<T>): string {
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
const a: RequestState<string> = { 
    state: "idle" 
};

const b: RequestState<string> = { 
    state: "loading" 
};

const c: RequestState<string> = { 
    state: "success", 
    data: "Hello" 
};

const d: RequestState<string> = { 
    state: "error", 
    message: "network issue" 
};


const e: RequestState<string[]> = { 
    state: "success", 
    data: ["Hello", "World"] 
};

// returning state of the api request
console.log(showState(a));
console.log(showState(b));
console.log(showState(c));
console.log(showState(d));
console.log(showState(e));