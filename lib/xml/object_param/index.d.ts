type ObjectParamDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  Doc: ObjectParamDocument;
  id: XmlElem<number>;
  is_enabled: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  sec_object_code: XmlElem<string>;
  base_object: XmlElem<ObjectTypeBase>;
  params_block: XmlElem<WebVariablesBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type ObjectParamDocument = XmlDocument & {
  TopElem: ObjectParamDocumentTopElem;
  object_param: ObjectParamDocumentTopElem;
  OnBeforeSave(): void;
  OnCreate(): void;
  DocDesc(): string;
};
