import jwt_decode from "jwt-decode";

export function parseToken() {
  if (!!localStorage.getItem("jwt")) {
    return jwt_decode(localStorage.getItem("jwt"));
  } else {
    return undefined;
  }
}
