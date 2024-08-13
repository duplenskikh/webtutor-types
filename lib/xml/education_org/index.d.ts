interface EducationOrgDocumentContact {
  contact_id: XmlElem<number | null>;
  main: XmlElem<boolean | null>;
  contact_fullname: XmlElem<string | null>;
  contact_position: XmlElem<string | null>;
  telephone_work: XmlElem<string | null>;
  telephone_mobile: XmlElem<string | null>;
  fax: XmlElem<string | null>;
  email: XmlElem<string | null>;
  web: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
}

interface EducationOrgDocumentPlace {
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  place_name: XmlElem<string | null>;
  place_parent_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  place_parent_name: XmlElem<string | null>;
  address: XmlElem<string | null>;
}

interface EducationOrgDocumentEducationOrg {
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
}

type EducationOrgDocumentTopElem = XmlTopElem &
OrgBase &
LectorsBase &
CustomElemsBase &
AdminAccessBase &
FuncManagersBase & {
  Doc: EducationOrgDocument;
  is_provider_courses: XmlElem<boolean>;
  provider_course_type_id: XmlElem<number | null, ProviderCourseTypeCatalogDocumentTopElem>;
  library_url: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  contacts: XmlMultiElem<EducationOrgDocumentContact | null>;
  places: XmlMultiElem<EducationOrgDocumentPlace | null>;
  education_orgs: XmlMultiElem<EducationOrgDocumentEducationOrg | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type EducationOrgDocument = XmlDocument & {
  TopElem: EducationOrgDocumentTopElem;
  education_org: EducationOrgDocumentTopElem;
  DocDesc(): string;
};
