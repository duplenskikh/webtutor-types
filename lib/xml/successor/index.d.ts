type SuccessorDocumentTopElem = XmlTopElem & { Doc: SuccessorDocument } & 
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  name?(): string;
  key_position_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  readiness_level_id?: XmlElem<number>;
  development_potential_id?: XmlElem<number>;
  efficiency_estimation_id?: XmlElem<number>;
  request_id?: XmlElem<number>;
  status?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type SuccessorDocument = XmlDocument & { TopElem: SuccessorDocumentTopElem; };
