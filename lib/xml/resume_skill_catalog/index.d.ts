type ResumeSkillCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  resume_id: XmlElem<number, ResumeCatalogDocumentTopElem>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_position: XmlElem<string>;
  creator_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  creator_person_fullname: XmlElem<string>;
  skill_id: XmlElem<number, SkillCatalogDocumentTopElem>;
  skill_name: XmlElem<string>;
  skill_id_with_levels: XmlElem<number, SkillCatalogDocumentTopElem>;
  level_id: XmlElem<string>;
  level_name: XmlElem<string>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
