interface CareerReserveTypeDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number>;
}

interface CareerReserveTypeDocumentTask {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  due_date: XmlElem<number>;
  desc: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  auto_appoint_learning: XmlElem<boolean>;
  commission_persons: XmlMultiElem<CareerReserveTypeDocumentTaskCommissionPerson>;
}

type CareerReserveTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CareerReserveTypeDocument;
  tasks: XmlMultiElem<CareerReserveTypeDocumentTask>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type CareerReserveTypeDocument = XmlDocument & {
  TopElem: CareerReserveTypeDocumentTopElem;
};
