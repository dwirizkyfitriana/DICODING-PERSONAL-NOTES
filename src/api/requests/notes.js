import { fetcher } from '..'
import { ENDPOINTS } from '../endpoints'

/**
 *
 * @param {Pick<Note, 'title' | 'body'>} payload
 * @returns {Promise<HttpResponse<Note>>}
 */
export const createNote = (payload) => {
  return fetcher(ENDPOINTS.NOTES.BASE, payload, 'POST')
}

/**
 *
 * @returns {Promise<HttpResponse<Note[]>>}
 */
export const getNotes = () => {
  return fetcher(ENDPOINTS.NOTES.BASE, {}, 'GET')
}

/**
 *
 * @returns {Promise<HttpResponse<Note[]>>}
 */
export const getArchivedNotes = () => {
  return fetcher(ENDPOINTS.NOTES.ALL_ARCHIVES, {}, 'GET')
}

/**
 *
 * @param {Pick<Note, 'id'>} note_id
 * @returns {Promise<HttpResponse<Note>>}
 */
export const getNote = (note_id) => {
  return fetcher(ENDPOINTS.NOTES.BASE + `/${note_id}`, {}, 'GET')
}

/**
 *
 * @param {Pick<Note, 'id'>} note_id
 * @returns {Promise<HttpResponse>}
 */
export const archiveNote = (note_id) => {
  return fetcher(ENDPOINTS.NOTES.ARCHIVE.replace('{id}', note_id), {}, 'POST')
}

/**
 *
 * @param {Pick<Note, 'id'>} note_id
 * @returns {Promise<HttpResponse>}
 */
export const unArchiveNote = (note_id) => {
  return fetcher(ENDPOINTS.NOTES.UN_ARCHIVE.replace('{id}', note_id), {}, 'POST')
}

/**
 *
 * @param {Pick<Note, 'id'>} note_id
 * @returns {Promise<HttpResponse>}
 */
export const deleteNote = (note_id) => {
  return fetcher(ENDPOINTS.NOTES.BASE + `/${note_id}`, {}, 'DELETE')
}
