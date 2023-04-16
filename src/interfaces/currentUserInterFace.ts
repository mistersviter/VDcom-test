export interface IContact {
  id: string;
  name: string;
  trn_ppsn: string;
  year: string;
  ard: string;
  company_number: string;
  email: string;
  phone: string;
  address: string;
}

export interface ICurrentUser {
  isLoggedIn?: boolean;
  login: string | null;
  email: string | null;
  name: string | null;
  position: string | null;
  avatar: string | null;
  contacts: IContact[] | null;
  filteredContacts?: IContact[] | null;
}
