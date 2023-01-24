type IntervalScheduleCatalogDocumentTopElem = XmlTopElem & { Doc: IntervalScheduleCatalogDocument } & 
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  person_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  presence_state_id: XmlElem<number>;
  status_id: XmlElem<string>;
  create_date: XmlElem<Date>;
  workflow_id: XmlElem<number>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_type: XmlElem<string>;
  change_start_date: XmlElem<Date>;
  change_finish_date: XmlElem<Date>;
  workflow_person_id: XmlMultiElem<number>;
  workflow_matching_type: XmlElem<string>;
}

type IntervalScheduleCatalogDocument = XmlDocument & { TopElem: IntervalScheduleCatalogDocumentTopElem; };
