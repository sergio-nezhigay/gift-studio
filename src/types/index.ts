import { PortableTextBlock } from "sanity";

export type TSections = "advantages" | "feedback" | "gallery" | "services";

export type TContactsResponse = {
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
};

export type TImage = {
  src: string;
  alt: string;
  lqip: string;
};

export type TGalleryResponse = {
  image: TImage;
  id: string;
}[];

export type TAboutResponse = TImage;

export type TFeedback = {
  image: TImage;
  text: PortableTextBlock[];
  id: string;
  reviewName: string;
};
export type TFeedbackResponse = TFeedback[];

export type TService = {
  image: TImage;
  serviceName: PortableTextBlock[];
  serviceUrl: string;
  id: string;
};
export type TServicesResponse = TService[];

export interface ITextBlock {
  _type: string;
  children?: Array<{ text?: string }>;
}

export type TBlocks = ITextBlock[] | undefined;
