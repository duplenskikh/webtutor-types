type TimeEntryCatalogDocumentTopElem = XmlTopElem & { Doc: TimeEntryCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  org_id: XmlElem<number>;
  task_id: XmlElem<number>;
  task_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  duration: XmlElem<number>;
  description: XmlElem<string>;
}

type TimeEntryCatalogDocument = XmlDocument & { TopElem: TimeEntryCatalogDocumentTopElem; };
