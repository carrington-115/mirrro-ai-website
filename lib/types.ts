import { StaticImageData } from "next/image";

export interface NavLinkType {
  label: string;
  id: string;
}

export interface productLinkTypes {
  productLink: string;
  image: StaticImageData;
  title: string;
  description: string;
}

export interface communicationTypes {
  icon: string;
  title: string;
}

export interface featureDataProps {
  icon?: string;
  title: string;
  description: string;
}

export interface updatesInputProps {
  inputType: string;
  placeholder: string;
  buttonName: string;
  inputTitle: string;
  btnSubmitAction: () => void;
}
