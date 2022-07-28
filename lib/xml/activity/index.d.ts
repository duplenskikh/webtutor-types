type ActivityDocumentTopElem = XmlTopElem & { Doc: ActivityDocument } & 
  WebVariablesBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_eval: XmlElem<boolean>;
  statements_eval: XmlElem<string>;
  statements_eval_url: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ActivityDocument = XmlDocument & { TopElem: ActivityDocumentTopElem; };
