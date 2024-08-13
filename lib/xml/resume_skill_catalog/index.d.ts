type ResumeSkillCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  resume_id: XmlElem<number | null, ResumeCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
  person_position: XmlElem<string | null>;
  creator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  creator_person_fullname: XmlElem<string | null>;
  skill_id: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  skill_name: XmlElem<string | null>;
  skill_id_with_levels: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  level_id: XmlElem<string | null>;
  level_name: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
