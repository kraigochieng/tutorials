export const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
export const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED"
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"


export function fetchUsersRequest() {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

export function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

export function fetchUsersFail(error) {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}