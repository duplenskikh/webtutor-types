type BannerDocumentTopElem = XmlTopElem & { Doc: BannerDocument } & 
AdminAccessBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  zone?: XmlElem<string>;
  img_url?: XmlElem<string>;
  url?: XmlElem<string>;
  html_text?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  role_id?: XmlMultiElem<number>;
}

type BannerDocument = XmlDocument & { TopElem: BannerDocumentTopElem; };
