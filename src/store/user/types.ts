export interface SetUserAction {
  type: 'SET_USER';
  payload: User;
}

export interface SetUsersAction {
  type: 'SET_USERS';
  payload: User[];
}

export interface SetFilterAction {
  type: 'SET_FILTER';
  payload: string;
  users: User[];
}

export interface ResetFilterAction {
  type: 'RESET_FILTER';
  users: User[];
}

export interface DeleteUserAction {
  type: 'DELETE_USER';
  payload: number;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
