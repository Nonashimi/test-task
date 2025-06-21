import { postBacket } from "../../api/postBacket";



export const postBacketAction = () => async function postBacketAction(data: Parameters<typeof postBacket>) {
  const response = await postBacket(...data);

  return response;
}