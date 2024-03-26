interface ActivityDocumentRequest {
  json_str: XmlElem<string>;
}

type ActivityDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: ActivityDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_eval: XmlElem<boolean>;
  statements_eval: XmlElem<string>;
  statements_eval_url: XmlElem<string>;
  request: XmlElem<ActivityDocumentRequest>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ActivityDocument = XmlDocument & {
  TopElem: ActivityDocumentTopElem;
  activity: ActivityDocumentTopElem;
  DocDesc(): string;
};
