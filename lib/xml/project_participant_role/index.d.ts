type ProjectParticipantRoleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
KnowledgePartsBase & {
  Doc: ProjectParticipantRoleDocument;
  project_id: XmlElem<number, ProjectCatalogDocumentTopElem>;
  participant_num: XmlElem<number>;
  provider_id: XmlElem<number, ProviderCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ProjectParticipantRoleDocument = XmlDocument & {
  TopElem: ProjectParticipantRoleDocumentTopElem;
  project_participant_role: ProjectParticipantRoleDocumentTopElem;
  DocDesc(): string;
};
