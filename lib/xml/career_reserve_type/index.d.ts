interface CareerReserveTypeDocumentTaskCommissionPersonsCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface CareerReserveTypeDocumentTaskCommissionPersons {
  commission_person: XmlElem<CareerReserveTypeDocumentTaskCommissionPersonsCommissionPerson>;
}

interface CareerReserveTypeDocumentTask {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.career_reserve_type_tasks_types>;
  due_date: XmlElem<number>;
  desc: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  auto_appoint_learning: XmlElem<boolean>;
  add_exist_appraise: XmlElem<boolean>;
  commission_persons: XmlElem<CareerReserveTypeDocumentTaskCommissionPersons>;
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
  career_reserve_type: CareerReserveTypeDocumentTopElem;
  DocDesc(): unknown;
};
