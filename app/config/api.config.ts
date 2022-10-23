export const SERVER_URL = process.env.SERVER_URL;
export const API_URL = `${SERVER_URL}/api`;

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getActorsUrl = (string: string) => `/actors${string}`;
export const getGenresUrl = (string: string) => `/genres${string}`;
export const getMoviesUrl = (string: string) => `/movies${string}`;
export const getUsersUrl = (string: string) => `/users${string}`;
