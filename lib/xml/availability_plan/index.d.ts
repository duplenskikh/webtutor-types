interface AvailabilityPlanPeriod {
  id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
}

interface AvailabilityPlanViewPeriodHour {
  hour?: XmlElem<number>;
  checked?: XmlElem<boolean>;
}

interface AvailabilityPlanViewPeriod {
  start_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  checked?: XmlElem<boolean>;
  hours?: XmlMultiElem<AvailabilityPlanViewPeriodHour>;
}

interface AvailabilityPlanView extends DescBase {
  periods?: XmlMultiElem<AvailabilityPlanViewPeriod>;
  obtain_peroids?(): any;
  init_periods?(): any;
  save_periods?(): any;
}

interface AvailabilityPlanTopElem extends XmlTopElem<AvailabilityPlanDocument>, FileListBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  object_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  start_hour?: XmlElem<number>;
  finish_hour?: XmlElem<number>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  periods?: XmlMultiElem<AvailabilityPlanPeriod>;
  view?: XmlElem<AvailabilityPlanView>;
}

type AvailabilityPlanDocument = XmlDocument<AvailabilityPlanTopElem>;
