type DnStudCentrtestResultDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudCentrtestResultDocument;
  subject: XmlElem<string>;
  mark: XmlElem<number>;
  result_date: XmlElem<Date>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  student_fullname: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnStudCentrtestResultDocument = XmlDocument & {
  TopElem: DnStudCentrtestResultDocumentTopElem;
};
