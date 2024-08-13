type ObjectParamDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  Doc: ObjectParamDocument;
  id: XmlElem<number | null>;
  is_enabled: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  sec_object_code: XmlElem<string | null>;
  base_object: XmlElem<ObjectTypeBase | null>;
  params_block: XmlElem<WebVariablesBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
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
