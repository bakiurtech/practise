// Model a RequestState<T> discriminated union with idle, loading, success (with data) and error (with message), and write a function that switches on it.


export type Idle = {
    state: "idle";
};

export type Loading = {
    state: "loading";
};

export type Success<T> = {
    state: "success";
    data: T;
};

export type ErrorState = {
    state: "error";
    message: string;
};

export type RequestState<T> = Idle | Loading | Success<T> | ErrorState;