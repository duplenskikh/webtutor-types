type ActionReportCatalogDocumentTopElem = XmlTopElem & { Doc: ActionReportCatalogDocument } & {
  id: XmlElem<number>;
  type: XmlElem<string>;
  status: XmlElem<string>;
  completed: XmlElem<boolean>;
  exchange_server_id: XmlElem<number>;
  object_id: XmlElem<number>;
  data_file_url: XmlElem<string>;
  last_upload_date: XmlElem<Date>;
  create_date: XmlElem<Date>;
}

type ActionReportCatalogDocument = XmlDocument & { TopElem: ActionReportCatalogDocumentTopElem; };
