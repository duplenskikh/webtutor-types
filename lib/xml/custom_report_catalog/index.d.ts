type CustomReportCatalogDocumentTopElem = XmlTopElem & { Doc: CustomReportCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_name_type: XmlElem<string>;
  object_name: XmlElem<string>;
  connect_2_object: XmlElem<string>;
  block: XmlElem<string>;
  access_block_type: XmlElem<string>;
  subscription: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CustomReportCatalogDocument = XmlDocument & { TopElem: CustomReportCatalogDocumentTopElem; };
