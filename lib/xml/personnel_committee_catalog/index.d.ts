type PersonnelCommitteeCatalogDocumentTopElem = XmlTopElem & { Doc: PersonnelCommitteeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number>;
  subdivision_id: XmlElem<number>;
  group_id: XmlElem<number>;
  career_reserve_type_id: XmlElem<number>;
  status: XmlElem<string>;
  participants_status: XmlElem<string>;
  creation_date: XmlElem<Date>;
  committee_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type PersonnelCommitteeCatalogDocument = XmlDocument & { TopElem: PersonnelCommitteeCatalogDocumentTopElem; };
