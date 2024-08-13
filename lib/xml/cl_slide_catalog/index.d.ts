type ClSlideCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  cl_module_id: XmlElem<number | null, ClModuleCatalogDocumentTopElem>;
  master_id: XmlElem<number | null, ClSlideCatalogDocumentTopElem>;
  master_code: XmlElem<string | null>;
  is_master: XmlElem<boolean | null>;
  is_splash: XmlElem<boolean | null>;
  sid: XmlElem<number | null>;
  greedy_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  greedy_person_fullname: XmlElem<string | null>;
  flag_completion: XmlElem<boolean | null>;
  approval_status: XmlElem<number | null, typeof common.cl_approval_states>;
  stamp: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
