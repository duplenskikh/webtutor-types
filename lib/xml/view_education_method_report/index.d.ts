interface ViewEducationMethodReportDocumentEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

interface ViewEducationMethodReportDocumentDataPersonEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_method_name: XmlElem<string>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  period: XmlElem<number>;
  common_position_method: XmlElem<boolean>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  education_plan_name: XmlElem<string>;
  active_request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  active_request_name: XmlElem<string>;
  close_request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  close_request_name: XmlElem<string>;
  last_learning_date: XmlElem<Date>;
  last_learning_id: XmlElem<number>;
  future_learning_date: XmlElem<Date>;
  future_learning_id: XmlElem<number>;
  finish_date: XmlElem<Date>;
}

interface ViewEducationMethodReportDocumentDataPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  flag_expanded: XmlElem<boolean>;
  education_methods: XmlMultiElem<ViewEducationMethodReportDocumentDataPersonEducationMethod>;
}

interface ViewEducationMethodReportDocumentData {
  persons: XmlMultiElem<ViewEducationMethodReportDocumentDataPerson>;
}

type ViewEducationMethodReportDocumentTopElem = XmlTopElem & {
  Doc: ViewEducationMethodReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  education_methods: XmlMultiElem<ViewEducationMethodReportDocumentEducationMethod>;
  education_method_selector: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  expanded_all: XmlElem<boolean>;
  data: XmlElem<ViewEducationMethodReportDocumentData>;
};

type ViewEducationMethodReportDocument = XmlDocument & {
  TopElem: ViewEducationMethodReportDocumentTopElem;
  view_education_method_report: ViewEducationMethodReportDocumentTopElem;
};
