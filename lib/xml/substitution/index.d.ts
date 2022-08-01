type SubstitutionDocumentTopElem = XmlTopElem & { Doc: SubstitutionDocument } & 
PersonFillingBase &
ObjectTypeBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  status?: XmlElem<string>;
  substitution_type_id?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type SubstitutionDocument = XmlDocument & { TopElem: SubstitutionDocumentTopElem; };
