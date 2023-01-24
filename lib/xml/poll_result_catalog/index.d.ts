type PollResultCatalogDocumentTopElem = XmlTopElem & { Doc: PollResultCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  poll_id: XmlElem<number>;
  poll_procedure_id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  question_id: XmlMultiElem<number>;
  is_done: XmlElem<boolean>;
  status: XmlElem<number>;
  education_plan_id: XmlElem<number>;
  create_date: XmlElem<Date>;
  main_value: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  use_proctoring: XmlElem<boolean>;
}

type PollResultCatalogDocument = XmlDocument & { TopElem: PollResultCatalogDocumentTopElem; };
