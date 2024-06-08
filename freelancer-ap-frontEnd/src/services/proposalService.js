import http from "./Httpservice";

export function getProposalsApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}
