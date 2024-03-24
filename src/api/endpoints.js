const baseUrl = import.meta.env.VITE_BASE_URL

export const ENDPOINTS = {
  USER: {
    REGISTER: `${baseUrl}/register`,
    LOGIN: `${baseUrl}/login`,
    SELF: `${baseUrl}/users/me`
  },
  NOTES: {
    BASE: `${baseUrl}/notes`,
    ALL_ARCHIVES: `${baseUrl}/notes/archived`,
    ARCHIVE: `${baseUrl}/notes/{id}/archive`,
    UN_ARCHIVE: `${baseUrl}/notes/{id}/unarchive`
  }
}
