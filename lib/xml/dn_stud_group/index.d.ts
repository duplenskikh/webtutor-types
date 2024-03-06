interface DnStudGroupDocumentSubfacultysSubfaculty {
  subfac_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
}

interface DnStudGroupDocumentSubfacultys {
  subfaculty: XmlElem<DnStudGroupDocumentSubfacultysSubfaculty>;
}

type DnStudGroupDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudGroupDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  stream_id: XmlElem<number, DnStreamCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.stud_group_states>;
  academ_year_id: XmlElem<number, DnAcademYearCatalogDocumentTopElem>;
  special_id: XmlElem<number, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number, DnSpecializationCatalogDocumentTopElem>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  faculty: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subfacultys: XmlElem<DnStudGroupDocumentSubfacultys>;
  group_size: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnStudGroupDocument = XmlDocument & {
  TopElem: DnStudGroupDocumentTopElem;
  dn_stud_group: DnStudGroupDocumentTopElem;
  DocDesc(): unknown;
};
