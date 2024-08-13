type ProjectParticipantRoleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
KnowledgePartsBase & {
  Doc: ProjectParticipantRoleDocument;
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  participant_num: XmlElem<number | null>;
  provider_id: XmlElem<number | null, ProviderCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ProjectParticipantRoleDocument = XmlDocument & {
  TopElem: ProjectParticipantRoleDocumentTopElem;
  project_participant_role: ProjectParticipantRoleDocumentTopElem;
  DocDesc(): string;
};
