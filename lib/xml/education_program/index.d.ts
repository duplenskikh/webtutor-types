interface IWTEducationProgramEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface IWTEducationProgramTopElem extends IWTAdminAccessBase {
  code?: XmlElem<string>;
	name?: XmlElem<string>;
	desc?: XmlElem<string>;
  education_methods?: XmlMultiElem<IWTEducationProgramEducationMethod>;
	comment?: XmlElem<string>;
	doc_info?: XmlElem<IWTDocInfoBase>;
	access?: XmlElem<IWTAccessDocBase>;
	role_id?: XmlMultiElem<number>;
}

type IWTEducationProgramDocument = XmlDocument<IWTEducationProgramTopElem>;
