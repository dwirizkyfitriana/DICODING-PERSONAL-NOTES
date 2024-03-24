import { ENDPOINTS } from '../endpoints'
import '../../@types/types'
import { fetcher } from '..'

/**
 *
 * @param {User} payload user data
 * @returns {Promise<HttpResponse>}
 */
export const register = (payload) => {
  return fetcher(ENDPOINTS.USER.REGISTER, payload, 'POST')
}

/**
 *
 * @param {Omit<User, 'name'>} payload login data
 * @returns {Promise<HttpResponse<{accessToken: string}>>}
 */
export const login = (payload) => {
  return fetcher(ENDPOINTS.USER.LOGIN, payload, 'POST')
}

/**
 *
 * @returns {Promise<HttpResponse<User>>}
 */
export const getSelf = () => {
  return fetcher(ENDPOINTS.USER.SELF, {}, 'GET')
}
