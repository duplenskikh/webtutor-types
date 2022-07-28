type CommitteeMemberDocumentTopElem = XmlTopElem & { Doc: CommitteeMemberDocument } & 
  FileListBase &
  AdminAccessBase &
  CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  catalog: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  boss_type_id: XmlElem<number>;
  committee_member_type: XmlElem<string>;
  status: XmlElem<string>;
  personnel_committee_id: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type CommitteeMemberDocument = XmlDocument & { TopElem: CommitteeMemberDocumentTopElem; };
