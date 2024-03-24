/**
 * @typedef {Object} User
 * @property {string} name - User's name
 * @property {string} email - User's email address (must be unique)
 * @property {string} password - User's password (must be at least 6 characters)
 */

/**
 * @typedef {Object} HttpResponse
 * @property {string} status - Response status (e.g., "success", "error")
 * @property {string} message - Response message
 * @property {Data?} data - Optional response data (may be absent in some cases)
 *
 * @typedef {Object} Data
 * @property {T?} - Any properties with arbitrary keys and values
 */

/**
 * @typedef {Object} Note
 * @property {string} id - Unique identifier of the note
 * @property {string} title - Title of the note
 * @property {string} body - Main content of the note
 * @property {string} owner - Owner of the note
 * @property {boolean} archived - Whether the note is archived or not
 * @property {string} createdAt - Date and time when the note was created
 */
