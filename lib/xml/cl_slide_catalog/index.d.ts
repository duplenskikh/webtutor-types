type ClSlideCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  cl_course_id: XmlElem<number, ClCourseCatalogDocumentTopElem>;
  cl_module_id: XmlElem<number, ClModuleCatalogDocumentTopElem>;
  master_id: XmlElem<number, ClSlideCatalogDocumentTopElem>;
  master_code: XmlElem<string>;
  is_master: XmlElem<boolean>;
  is_splash: XmlElem<boolean>;
  sid: XmlElem<number>;
  greedy_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  greedy_person_fullname: XmlElem<string>;
  flag_completion: XmlElem<boolean>;
  approval_status: XmlElem<number, typeof common.cl_approval_states>;
  stamp: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
