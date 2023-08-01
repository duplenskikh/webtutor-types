type ProjectParticipantRoleDocumentTopElem = XmlTopElem & { Doc: ProjectParticipantRoleDocument } & 
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
KnowledgePartsBase & {
  project_id: XmlElem<number>;
  participant_num: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ProjectParticipantRoleDocument = XmlDocument & {
  TopElem: ProjectParticipantRoleDocumentTopElem;
};
