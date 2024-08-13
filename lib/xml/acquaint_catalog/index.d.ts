type AcquaintCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  normative_date: XmlElem<Date | null>;
  acquaint_num: XmlElem<number | null>;
  acquainted_num: XmlElem<number | null>;
  collaborators: XmlElem<string | null>;
  status: XmlElem<boolean | null>;
  reacquaintance_period: XmlElem<number | null>;
  assessments_id: XmlMultiElemObject<number | null, AssessmentCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
