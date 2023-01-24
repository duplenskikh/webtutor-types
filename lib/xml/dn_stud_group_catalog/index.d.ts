type DnStudGroupCatalogDocumentTopElem = XmlTopElem & { Doc: DnStudGroupCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  stream_id: XmlElem<number>;
  status_id: XmlElem<string>;
  academ_year_id: XmlElem<number>;
  special_id: XmlElem<number>;
  specialization_id: XmlElem<number>;
  qualification_id: XmlElem<number>;
  faculty: XmlElem<number>;
  group_size: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnStudGroupCatalogDocument = XmlDocument & { TopElem: DnStudGroupCatalogDocumentTopElem; };
