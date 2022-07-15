interface IWTEducationProgramEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface IWTEducationProgramTopElem extends AdminAccessBase {
  code?: XmlElem<string>;
	name?: XmlElem<string>;
	desc?: XmlElem<string>;
  education_methods?: XmlMultiElem<IWTEducationProgramEducationMethod>;
	comment?: XmlElem<string>;
	doc_info?: XmlElem<DocInfoBase>;
	access?: XmlElem<AccessDocBase>;
	role_id?: XmlMultiElem<number>;
}

type IWTEducationProgramDocument = XmlDocument<IWTEducationProgramTopElem>;
