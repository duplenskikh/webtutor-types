type AssessmentAppraiseCatalogDocumentTopElem = XmlTopElem & { Doc: AssessmentAppraiseCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  is_model: XmlElem<boolean>;
  web_display: XmlElem<boolean>;
  flag_use_plan: XmlElem<boolean>;
  ignore_presence: XmlElem<boolean>;
  external_display_options: XmlElem<string>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  person_id: XmlElem<number>;
  workflow_id: XmlElem<number>;
  player: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type AssessmentAppraiseCatalogDocument = XmlDocument & { TopElem: AssessmentAppraiseCatalogDocumentTopElem; };
