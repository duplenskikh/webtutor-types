interface CareerReserveTypeDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface CareerReserveTypeDocumentTask {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string, typeof common.career_reserve_type_tasks_types>;
  due_date: XmlElem<number | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Автоматическое назначение */
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
  /** Задания */
  tasks: XmlMultiElem<CareerReserveTypeDocumentTask | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type CareerReserveTypeDocument = XmlDocument & {
  TopElem: CareerReserveTypeDocumentTopElem;
  career_reserve_type: CareerReserveTypeDocumentTopElem;
  DocDesc(): string;
};
