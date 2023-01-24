type ClCourseCatalogDocumentTopElem = XmlTopElem & { Doc: ClCourseCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  author_id: XmlMultiElem<number>;
  localization_id: XmlMultiElem<number>;
  tag_id: XmlMultiElem<number>;
  role_id: XmlMultiElem<number>;
  platform: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ClCourseCatalogDocument = XmlDocument & { TopElem: ClCourseCatalogDocumentTopElem; };
