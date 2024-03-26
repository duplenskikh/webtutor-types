interface ImportEventsDocumentCollaborator {
  collaborator_id: XmlElem<string>;
  lastname: XmlElem<string>;
  firstname: XmlElem<string>;
  middlename: XmlElem<string>;
  birth_date: XmlElem<Date>;
  sex: XmlElem<string>;
  email: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_org_name: XmlElem<string>;
}

interface ImportEventsDocumentTest {
  code: XmlElem<string>;
  name: XmlElem<string>;
  qti_text: XmlElem<string>;
}

type ImportEventCatalogDocumentTopElem = XmlTopElem & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  education_org_name: XmlElem<string>;
  status_id: XmlElem<string, typeof common.event_status_types>;
  collaborators: XmlMultiElem<ImportEventsDocumentCollaborator>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  test: XmlElem<ImportEventsDocumentTest>;
};
