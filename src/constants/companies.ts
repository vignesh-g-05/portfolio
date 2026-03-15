const ICON_PATH = "/icons/companies";

export const COMPANIES = {
  techmaxima: {
    icon: `${ICON_PATH}/techmaxima.png`,
    label: "TechMaxima",
    url: "https://techmaxima.in",
  },
};

export type Company = keyof typeof COMPANIES;
