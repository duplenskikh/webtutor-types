interface CareerReserveTypeTaskCommissionPerson extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface CareerReserveTypeTask {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  due_date?: XmlElem<number>;
  desc?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  auto_appoint_learning?: XmlElem<boolean>;
  commission_persons?: XmlMultiElem<CareerReserveTypeTaskCommissionPerson>;
}

interface CareerReserveTypeViewFilter extends AuFtFilter {
}

interface CareerReserveTypeView extends DescBase {
  part_index?: XmlElem<number>;
  filter?: XmlElem<AuFtFilter>;
  filter?: XmlElem<CareerReserveTypeViewFilter>;
}

interface CareerReserveTypeTopElem extends XmlTopElem<CareerReserveTypeDocument>, ObjectCodeNameBase, TalentPoolFuncManagersBase, FileListBase, AdminAccessBase, CustomElemsBase {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  tasks?: XmlMultiElem<CareerReserveTypeTask>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<CareerReserveTypeView>;
}

type CareerReserveTypeDocument = XmlDocument<CareerReserveTypeTopElem>;
