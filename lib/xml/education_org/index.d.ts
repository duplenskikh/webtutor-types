interface EducationOrgContact {
  contact_id?: XmlElem<number>;
  main?: XmlElem<boolean>;
  contact_fullname?: XmlElem<string>;
  contact_position?: XmlElem<string>;
  telephone_work?: XmlElem<string>;
  telephone_mobile?: XmlElem<string>;
  fax?: XmlElem<string>;
  email?: XmlElem<string>;
  web?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface EducationOrgPlace {
  place_id?: XmlElem<number>;
  place_name?: XmlElem<string>;
  place_parent_id?: XmlElem<number>;
  place_parent_name?: XmlElem<string>;
  address?: XmlElem<string>;
}

interface EducationOrgEducationOrg {
  education_org_id?: XmlElem<number>;
}

interface EducationOrgTopElem extends XmlTopElem<EducationOrgDocument>, OrgBase, LectorsBase, CustomElemsBase, AdminAccessBase, FuncManagersBase {
  is_provider_courses?: XmlElem<boolean>;
  provider_course_type_id?: XmlElem<number>;
  library_url?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  role_id?: XmlMultiElem<number>;
  contacts?: XmlMultiElem<EducationOrgContact>;
  places?: XmlMultiElem<EducationOrgPlace>;
  education_orgs?: XmlMultiElem<EducationOrgEducationOrg>;
}

type EducationOrgDocument = XmlDocument<EducationOrgTopElem>;
