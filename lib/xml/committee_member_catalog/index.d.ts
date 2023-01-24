type CommitteeMemberCatalogDocumentTopElem = XmlTopElem & { Doc: CommitteeMemberCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  catalog: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  boss_type_id: XmlElem<number>;
  personnel_committee_id: XmlElem<number>;
  status: XmlElem<string>;
  committee_member_type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CommitteeMemberCatalogDocument = XmlDocument & { TopElem: CommitteeMemberCatalogDocumentTopElem; };
