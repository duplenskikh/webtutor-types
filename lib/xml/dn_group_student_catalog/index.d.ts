type DnGroupStudentCatalogDocumentTopElem = XmlTopElem &
PersonBase & {
  id: XmlElem<number>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  special_id: XmlElem<number, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number, DnSpecializationCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.student_states>;
  main_group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
  group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
