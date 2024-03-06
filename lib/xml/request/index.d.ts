interface RequestDocumentPersonsPerson extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface RequestDocumentPersons {
  person: XmlElem<RequestDocumentPersonsPerson>;
}

interface RequestDocumentGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
}

interface RequestDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string>;
  is_main: XmlElem<boolean>;
}

interface RequestDocumentCustomElement {
  name: XmlElem<string>;
  title: XmlElem<string>;
  value: XmlElem<string>;
}

type RequestDocumentTopElem = XmlTopElem &
PersonFillingBase &
KnowledgePartsBase &
WorkflowDataBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: RequestDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  status_id: XmlElem<string, typeof common.request_status_types>;
  create_date: XmlElem<Date>;
  close_date: XmlElem<Date>;
  plan_close_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  object_start_date: XmlElem<Date>;
  object_type: XmlElem<string>;
  is_group: XmlElem<boolean>;
  persons: XmlElem<RequestDocumentPersons>;
  person_num(): unknown;
  groups: XmlMultiElem<RequestDocumentGroup>;
  workflow_matchings: XmlMultiElem<RequestDocumentWorkflowMatching>;
  workflow_matching_type: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  custom_elements: XmlMultiElem<RequestDocumentCustomElement>;
  access: XmlElem<AccessDocBase>;
  start_action(sTypeParam: string): unknown;
};

type RequestDocument = XmlDocument & {
  TopElem: RequestDocumentTopElem;
  request: RequestDocumentTopElem;
  OnLocalInit(): unknown;
  OnCreate(): unknown;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
