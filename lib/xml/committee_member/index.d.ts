type CommitteeMemberDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CommitteeMemberDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  committee_member_type: XmlElem<string, typeof common.committee_member_types>;
  status: XmlElem<string, typeof common.committee_member_status_types>;
  personnel_committee_id: XmlElem<number | null, PersonnelCommitteeCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type CommitteeMemberDocument = XmlDocument & {
  TopElem: CommitteeMemberDocumentTopElem;
  committee_member: CommitteeMemberDocumentTopElem;
  DocDesc(): string;
};
