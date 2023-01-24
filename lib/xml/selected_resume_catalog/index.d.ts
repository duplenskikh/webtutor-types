type SelectedResumeCatalogDocumentTopElem = XmlTopElem & { Doc: SelectedResumeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  resume_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SelectedResumeCatalogDocument = XmlDocument & { TopElem: SelectedResumeCatalogDocumentTopElem; };
