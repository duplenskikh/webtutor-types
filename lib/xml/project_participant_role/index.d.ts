type ProjectParticipantRoleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
KnowledgePartsBase & {
  Doc: ProjectParticipantRoleDocument;
  /** Проект */
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  participant_num: XmlElem<number | null>;
  provider_id: XmlElem<number | null, ProviderCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type ProjectParticipantRoleDocument = XmlDocument & {
  TopElem: ProjectParticipantRoleDocumentTopElem;
  project_participant_role: ProjectParticipantRoleDocumentTopElem;
  DocDesc(): string;
};
