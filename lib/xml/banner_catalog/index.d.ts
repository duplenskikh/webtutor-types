type BannerCatalogDocumentTopElem = XmlTopElem & { Doc: BannerCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  zone: XmlElem<string>;
  img_url: XmlElem<string>;
  url: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BannerCatalogDocument = XmlDocument & { TopElem: BannerCatalogDocumentTopElem; };
