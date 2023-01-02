export interface Welcome {
  category: Category
  posts: Post[]
}

export interface Category {
  metadata: Metadata
  sys: IconSys
  fields: CategoryFields
}

export interface CategoryFields {
  title: string
  slug: string
  icon: Icon
}

export interface Icon {
  metadata: Metadata
  sys: IconSys
  fields: IconFields
}

export interface IconFields {
  title: string
  file: File
}

export interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

export interface Details {
  size: number
  image: Image
}

export interface Image {
  width: number
  height: number
}

export interface Metadata {
  tags: any[]
}

export interface IconSys {
  space: ContentType
  id: string
  type: FluffyType
  createdAt: Date
  updatedAt: Date
  environment: ContentType
  revision: number
  locale: Locale
  contentType?: ContentType
}

export interface ContentType {
  sys: ContentTypeSys
}

export interface ContentTypeSys {
  id: ID
  type: PurpleType
  linkType: LinkType
}

export enum ID {
  BlogPost = "blogPost",
  Category = "category",
  Master = "master",
  The7Pjbebwlapcg = "7pjbebwlapcg",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum PurpleType {
  Link = "Link",
}

export enum Locale {
  EnUS = "en-US",
}

export enum FluffyType {
  Asset = "Asset",
  Entry = "Entry",
}

export interface Post {
  metadata: Metadata
  sys: IconSys
  fields: PostFields
}

export interface PostFields {
  title: string
  slug: string
  category: Category[]
  body: string
  references?: string[]
}
