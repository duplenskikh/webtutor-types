type DnStudCentrtestResultDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudCentrtestResultDocument;
  subject: XmlElem<string | null>;
  mark: XmlElem<number | null>;
  result_date: XmlElem<Date | null>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  student_fullname: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnStudCentrtestResultDocument = XmlDocument & {
  TopElem: DnStudCentrtestResultDocumentTopElem;
  dn_stud_centrtest_result: DnStudCentrtestResultDocumentTopElem;
  DocDesc(): string;
};
