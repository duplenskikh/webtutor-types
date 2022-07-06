interface TutorTopElem extends XmlTopElem<TutorDocument>,
  IWTPersonFillingBase,
  IWTFileListBase,
  IWTAdminAccessBase,
  IWTCustomElemsBase
{
  code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  career_reserve_type_id?: XmlElem<number>;
  status?: XmlElem<string>;
  lastname?: XmlElem<string>;
  firstname?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  position_commons?: XmlMultiElem<any>;
  access?: XmlElem<IWTAccessDocBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

type TutorDocument = XmlDocument<TutorTopElem>;
