interface SubdivisionTopElem extends XmlTopElem<SubdivisionDocument>,
  IWTObjectCodeNameBase,
  IWTFileListBase,
  IWTFuncManagersBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  IWTDocumentPersonsBase
{
  org_id?: XmlElem<number>;
  parent_object_id?: XmlElem<number>;
  is_disbanded?: XmlElem<boolean>;
  lng_id?: XmlElem<string>;
  location_id?: XmlElem<string>;
  access_time_start?: XmlElem<string>;
  access_time_end?: XmlElem<string>;
  show_detailed?: XmlElem<boolean>;
  show_children?: XmlElem<boolean>;
  place_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  schedule_type_id?: XmlElem<number>;
  formed_date?: XmlElem<Date>;
  disbanded_date?: XmlElem<Date>;
  cost_center_id?: XmlElem<number>;
  is_faculty?: XmlElem<boolean>;
  outstaff?: XmlElem<IWTOutstaffPeriodsBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  start_action?(): any
}

type SubdivisionDocument = XmlDocument<SubdivisionTopElem>;
