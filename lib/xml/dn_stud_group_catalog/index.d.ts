type DnStudGroupCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  stream_id: XmlElem<number, DnStreamCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.stud_group_states>;
  academ_year_id: XmlElem<number, DnAcademYearCatalogDocumentTopElem>;
  special_id: XmlElem<number, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number, DnSpecializationCatalogDocumentTopElem>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  faculty: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  group_size: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
