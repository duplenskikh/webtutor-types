type WebPersonStateCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type_id: XmlElem<string, typeof common.web_person_state_types>;
  OnBuild(): void;
};
