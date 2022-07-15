interface BannerView extends DescBase {
  web_img_name?: XmlElem<string>;
  temp_url?: XmlElem<string>;
}

interface BannerTopElem extends XmlTopElem<BannerDocument>, AdminAccessBase {
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
  role_id?: XmlMultiElem<number>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<BannerView>;
}

type BannerDocument = XmlDocument<BannerTopElem>;
