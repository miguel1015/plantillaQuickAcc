export interface User {
  id: number;
  name: string;
  email: string;
}

export interface GetUserResponse {
  data: User[];
}

export interface PostUserRequest {
  name: string;
  email: string;
}

export interface PostUserResponse {
  id: number;
  name: string;
  password: string;
  email: string;
  createdAt: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export interface GetCharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}
