type ObjectRequirementCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  requirement_type: XmlElem<string>;
  requirement_object_id: XmlElem<number>;
  requirement_object_type: XmlElem<string, typeof common.exchange_object_types>;
  sec_requirement_object_id: XmlElem<number>;
  sec_requirement_object_type: XmlElem<string, typeof common.exchange_object_types>;
  obligatory: XmlElem<boolean>;
  requirement_value: XmlElem<string>;
  additional_param: XmlElem<string>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
