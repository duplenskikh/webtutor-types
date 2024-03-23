type PollResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
  poll_procedure_id: XmlElem<number, PollProcedureCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  question_id: XmlMultiElemObject<number>;
  is_done: XmlElem<boolean>;
  status: XmlElem<number>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  create_date: XmlElem<Date>;
  main_value: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  use_proctoring: XmlElem<boolean>;
  OnBuild(): void;
};
