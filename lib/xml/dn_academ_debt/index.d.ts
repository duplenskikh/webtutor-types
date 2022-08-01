type DnAcademDebtDocumentTopElem = XmlTopElem & { Doc: DnAcademDebtDocument } & 
AdminAccessBase &
CustomElemsBase & {
  code?: XmlElem<string>;
  faculty_id?: XmlElem<number>;
  chair_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
  stream_id?: XmlElem<number>;
  stud_group_id?: XmlElem<number>;
  student_id?: XmlElem<number>;
  discipl_id?: XmlElem<number>;
  contr_form_id?: XmlElem<number>;
  latest_date?: XmlElem<Date>;
  liquid_date?: XmlElem<Date>;
  doc_info?: XmlElem<DocInfoBase>;
}

type DnAcademDebtDocument = XmlDocument & { TopElem: DnAcademDebtDocumentTopElem; };
