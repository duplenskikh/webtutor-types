interface DnStudGroupDocumentSubfaculty {
  subfac_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

type DnStudGroupDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudGroupDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.stud_group_states>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  faculty: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subfacultys: XmlMultiElem<DnStudGroupDocumentSubfaculty | null>;
  group_size: XmlElem<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnStudGroupDocument = XmlDocument & {
  TopElem: DnStudGroupDocumentTopElem;
  dn_stud_group: DnStudGroupDocumentTopElem;
  DocDesc(): string;
};
