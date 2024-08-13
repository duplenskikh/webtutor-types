type BannerDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: BannerDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string>;
  zone: XmlElem<string | null>;
  img_url: XmlElem<string | null>;
  url: XmlElem<string | null>;
  html_text: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type BannerDocument = XmlDocument & {
  TopElem: BannerDocumentTopElem;
  banner: BannerDocumentTopElem;
  DocDesc(): string;
};
