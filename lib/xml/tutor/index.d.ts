interface TutorTopElem extends XmlTopElem<TutorDocument>,
  PersonFillingBase,
  IWTFileListBase,
  AdminAccessBase,
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
  doc_info?: XmlElem<DocInfoBase>;
}

type TutorDocument = XmlDocument<TutorTopElem>;
