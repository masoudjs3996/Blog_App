export type PageParams<T extends string> = {
  params: Promise<Record<T, string>>;
};
