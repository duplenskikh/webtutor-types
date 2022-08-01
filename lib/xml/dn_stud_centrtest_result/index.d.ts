type DnStudCentrtestResultDocumentTopElem = XmlTopElem & { Doc: DnStudCentrtestResultDocument } & 
AdminAccessBase &
CustomElemsBase & {
  subject?: XmlElem<string>;
  mark?: XmlElem<number>;
  result_date?: XmlElem<Date>;
  student_id?: XmlElem<number>;
  student_fullname?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type DnStudCentrtestResultDocument = XmlDocument & { TopElem: DnStudCentrtestResultDocumentTopElem; };
