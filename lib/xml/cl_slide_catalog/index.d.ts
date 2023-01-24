type ClSlideCatalogDocumentTopElem = XmlTopElem & { Doc: ClSlideCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  cl_course_id: XmlElem<number>;
  cl_module_id: XmlElem<number>;
  master_id: XmlElem<number>;
  master_code: XmlElem<string>;
  is_master: XmlElem<boolean>;
  is_splash: XmlElem<boolean>;
  sid: XmlElem<number>;
  greedy_person_id: XmlElem<number>;
  greedy_person_fullname: XmlElem<string>;
  flag_completion: XmlElem<boolean>;
  approval_status: XmlElem<number>;
  stamp: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ClSlideCatalogDocument = XmlDocument & { TopElem: ClSlideCatalogDocumentTopElem; };
