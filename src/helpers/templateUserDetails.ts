import { User } from 'store/user/types';

export interface Info {
  name: string;
  title: string;
}

export interface TemplateUserDetails {
  address: Info[];
  company: Info[];
}

export const templateUserDetails = (user: User): TemplateUserDetails => {
  if (user === null) return null;
  const { address, company } = user;

  return {
    address: address
      ? [
          { name: 'Street', title: address.street },
          { name: 'Suite', title: address.suite },
          { name: 'City', title: address.city },
          { name: 'Zipcode', title: address.zipcode },
        ]
      : [],
    company: company
      ? [
          { name: 'Name', title: company.name },
          { name: 'Catch', title: company.catchPhrase },
          { name: 'BS', title: company.bs },
        ]
      : [],
  };
};
