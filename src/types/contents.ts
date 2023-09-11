interface Image {
  _id: string;
  src: string;
  fileType: string;
  fileSize: number;
  fileName: string;
  width: number;
  height: number;
}

export interface AboutMe {
  name: string;
  biography: string;
  qualifications: {
    name: string;
    date: string;
  }[];
  links: {
    name: string;
    url: string;
    iconName?: string;
  }[];
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  url: string;
  repository: string;
  date: string;
  skills: {
    name: string;
    iconName?: string;
  }[];
  contents: string;
}

export interface Post {
  title: string;
  slug: string;
  tags: {
    name: string;
    slug: string;
  }[];
  body: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
  };
}
