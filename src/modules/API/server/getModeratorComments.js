import axios from "axios";
import {getQueryURL} from "../../functions/getQueryURL";

export async function getModeratorCommentsAPI (idUser, idContest) {
  const dataQuery = new FormData()
  dataQuery.append('idUser', idUser)
  dataQuery.append('search', window.location.search)
  dataQuery.append('contest_id', idContest)

  return await axios.post(getQueryURL('getModeratorComments'), dataQuery)
}
