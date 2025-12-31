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
