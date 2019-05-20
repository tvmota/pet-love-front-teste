import { Api } from './Api'

export async function searchCep (cep) {
  let { data } = (await Api.get(`cep/${cep}`))

  return data
}
