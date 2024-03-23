type CommitteeMemberDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CommitteeMemberDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  committee_member_type: XmlElem<string, typeof common.committee_member_types>;
  status: XmlElem<string, typeof common.committee_member_status_types>;
  personnel_committee_id: XmlElem<number, PersonnelCommitteeCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type CommitteeMemberDocument = XmlDocument & {
  TopElem: CommitteeMemberDocumentTopElem;
  committee_member: CommitteeMemberDocumentTopElem;
  DocDesc(): string;
};
