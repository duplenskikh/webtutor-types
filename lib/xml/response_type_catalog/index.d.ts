type ResponseTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ResponseTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  access_block_type: XmlElem<string>;
  basic_desc_field: XmlElem<string>;
  basic_score_field: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ResponseTypeCatalogDocument = XmlDocument & { TopElem: ResponseTypeCatalogDocumentTopElem; };
