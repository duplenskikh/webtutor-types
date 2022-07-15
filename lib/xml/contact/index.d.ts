interface ContactPollResult {
  poll_result_id?: XmlElem<number>;
}

interface ContactView extends DescBase {
}

interface ContactTopElem extends XmlTopElem<ContactDocument>, FileListBase, AdminAccessBase, CustomElemsBase, CustomDatasBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  project_id?: XmlElem<number>;
  type_id?: XmlElem<number>;
  initiator_person_id?: XmlElem<number>;
  contact_person_id?: XmlElem<number>;
  contact_org_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  contact_date?: XmlElem<Date>;
  previous_contact_id?: XmlElem<number>;
  result_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  desc?: XmlElem<string>;
  poll_results?: XmlMultiElem<ContactPollResult>;
  view?: XmlElem<ContactView>;
  initiator_person_fullname?(): any;
  contact_person_fullname?(): any;
}

type ContactDocument = XmlDocument<ContactTopElem>;
