type PrintFormCatalogDocumentTopElem = XmlTopElem & { Doc: PrintFormCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  object_name: XmlElem<string>;
  file_name: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PrintFormCatalogDocument = XmlDocument & { TopElem: PrintFormCatalogDocumentTopElem; };
