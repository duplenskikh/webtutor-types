type DnStudGroupCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.stud_group_states>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  faculty: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  group_size: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
