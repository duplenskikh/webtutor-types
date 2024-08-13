interface CareerReserveTypeDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface CareerReserveTypeDocumentTask {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.career_reserve_type_tasks_types>;
  due_date: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  auto_appoint_learning: XmlElem<boolean | null>;
  add_exist_appraise: XmlElem<boolean | null>;
  commission_persons: XmlMultiElem<CareerReserveTypeDocumentTaskCommissionPerson | null>;
}

type CareerReserveTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CareerReserveTypeDocument;
  tasks: XmlMultiElem<CareerReserveTypeDocumentTask | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type CareerReserveTypeDocument = XmlDocument & {
  TopElem: CareerReserveTypeDocumentTopElem;
  career_reserve_type: CareerReserveTypeDocumentTopElem;
  DocDesc(): string;
};
