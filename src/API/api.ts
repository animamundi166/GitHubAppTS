import axios from 'axios';
import { PER_PAGE } from '../constants/constants';

export interface IUserInfo {
  login: string,
  name: string,
  avatar_url: string,
  html_url: string,
  followers: number,
  following: number,
  public_repos: number,
}

export interface IReposInfo {
  id: number,
  name: string,
  description: string,
  html_url: string,
}

const http = axios.create({
  baseURL: 'https://api.github.com/users/',
});

const api = {
  getUser: async (user: string): Promise<IUserInfo> => {
    const response = await http.get<IUserInfo>(`${user}`);
    return response.data;
  },

  getRepos: async (user: string, page = 1): Promise<IReposInfo[]> => {
    const response = await http.get<IReposInfo[]>(`${user}/repos?sort=pushed&per_page=${PER_PAGE}&page=${page}`);
    return response.data;
  },
};

export default api;
