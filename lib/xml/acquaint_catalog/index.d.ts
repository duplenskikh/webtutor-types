type AcquaintCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  normative_date: XmlElem<Date>;
  acquaint_num: XmlElem<number>;
  acquainted_num: XmlElem<number>;
  collaborators: XmlElem<string>;
  status: XmlElem<boolean>;
  reacquaintance_period: XmlElem<number>;
  assessments_id: XmlMultiElemObject<number, AssessmentCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
