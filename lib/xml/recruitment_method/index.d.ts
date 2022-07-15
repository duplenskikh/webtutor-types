interface RecruitmentMethodTopElem extends XmlTopElem<RecruitmentMethodDocument>, ObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type RecruitmentMethodDocument = XmlDocument<RecruitmentMethodTopElem>;
