interface RequestDocumentPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface RequestDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface RequestDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string | null>;
  is_main: XmlElem<boolean | null>;
}

interface RequestDocumentCustomElement {
  name: XmlElem<string | null>;
  title: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

type RequestDocumentTopElem = XmlTopElem &
PersonFillingBase &
KnowledgePartsBase &
WorkflowDataBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: RequestDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  status_id: XmlElem<string, typeof common.request_status_types>;
  create_date: XmlElem<Date | null>;
  close_date: XmlElem<Date | null>;
  plan_close_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  object_code: XmlElem<string | null>;
  object_start_date: XmlElem<Date | null>;
  object_type: XmlElem<string | null>;
  is_group: XmlElem<boolean>;
  persons: XmlMultiElem<RequestDocumentPerson | null>;
  person_num(): number;
  groups: XmlMultiElem<RequestDocumentGroup | null>;
  workflow_matchings: XmlMultiElem<RequestDocumentWorkflowMatching | null>;
  workflow_matching_type: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  is_create_init: XmlElem<boolean | null>;
  custom_elements: XmlMultiElem<RequestDocumentCustomElement | null>;
  access: XmlElem<AccessDocBase | null>;
  start_action(type: string): number;
};

type RequestDocument = XmlDocument & {
  TopElem: RequestDocumentTopElem;
  request: RequestDocumentTopElem;
  OnLocalInit(): void;
  OnCreate(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
