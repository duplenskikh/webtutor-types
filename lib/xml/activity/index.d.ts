interface ActivityDocumentRequest {
  json_str: XmlElem<string | null>;
}

type ActivityDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: ActivityDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_eval: XmlElem<boolean>;
  statements_eval: XmlElem<string | null>;
  statements_eval_url: XmlElem<string | null>;
  request: XmlElem<ActivityDocumentRequest | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ActivityDocument = XmlDocument & {
  TopElem: ActivityDocumentTopElem;
  activity: ActivityDocumentTopElem;
  DocDesc(): string;
};
