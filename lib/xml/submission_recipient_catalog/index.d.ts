type SubmissionRecipientCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Тип отчетной формы */
  submission_type_id: XmlElem<number | null, SubmissionCatalogDocumentTopElem>;
  /** Название типа */
  submission_type_name: XmlElem<string | null>;
  /** Сотрудник */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО оцениваемого */
  person_fullname: XmlElem<string | null>;
  /** Название должности оцениваемого */
  person_position_name: XmlElem<string | null>;
  /** Название подразделения оцениваемого */
  person_subdivision_name: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
