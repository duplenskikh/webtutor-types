type BannerDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: BannerDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string>;
  /** Зона */
  zone: XmlElem<string | null>;
  /** Адрес картинки */
  img_url: XmlElem<string | null>;
  /** Адрес перехода */
  url: XmlElem<string | null>;
  /** HTML текст */
  html_text: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  /** Rich текст */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type BannerDocument = XmlDocument & {
  TopElem: BannerDocumentTopElem;
  banner: BannerDocumentTopElem;
  DocDesc(): string;
};
