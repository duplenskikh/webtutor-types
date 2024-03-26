type AttorneyCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  state_id: XmlElem<string, typeof common.education_method_states>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  essential_id: XmlElem<string>;
  essential_name: XmlElem<string>;
  attorney_url: XmlElem<string>;
  attorney_sig_file_url: XmlElem<string>;
  upload: XmlElem<boolean>;
  OnBuild(): void;
};
