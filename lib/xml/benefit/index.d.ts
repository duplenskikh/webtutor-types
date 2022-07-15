interface BenefitView extends DescBase {
}

interface BenefitTopElem extends XmlTopElem<BenefitDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  weight?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<BenefitView>;
}

type BenefitDocument = XmlDocument<BenefitTopElem>;
