type PollResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  poll_procedure_id: XmlElem<number | null, PollProcedureCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
  question_id: XmlMultiElemObject<number | null>;
  is_done: XmlElem<boolean | null>;
  status: XmlElem<number | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  create_date: XmlElem<Date | null>;
  main_value: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  use_proctoring: XmlElem<boolean>;
  OnBuild(): void;
};
