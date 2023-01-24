type AcquaintCatalogDocumentTopElem = XmlTopElem & { Doc: AcquaintCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  normative_date: XmlElem<Date>;
  acquaint_num: XmlElem<number>;
  acquainted_num: XmlElem<number>;
  collaborators: XmlElem<string>;
  status: XmlElem<boolean>;
  reacquaintance_period: XmlElem<number>;
  assessments_id: XmlMultiElem<number>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type AcquaintCatalogDocument = XmlDocument & { TopElem: AcquaintCatalogDocumentTopElem; };
