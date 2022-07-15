interface BenefitItemView extends DescBase {
}

interface BenefitItemTopElem extends XmlTopElem<BenefitItemDocument>, PersonFillingBase, FileListBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  status?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  benefit_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<BenefitItemView>;
}

type BenefitItemDocument = XmlDocument<BenefitItemTopElem>;
