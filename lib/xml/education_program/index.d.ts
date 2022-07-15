interface EducationProgramEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface EducationProgramViewFilter extends AuFtFilter {
}

interface EducationProgramView extends DescBase {
  part_index?: XmlElem<number>;
  filter?: XmlElem<EducationProgramViewFilter>;
}

interface EducationProgramTopElem extends XmlTopElem<EducationProgramDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  education_methods?: XmlMultiElem<EducationProgramEducationMethod>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<EducationProgramView>;
}

type EducationProgramDocument = XmlDocument<EducationProgramTopElem>;
