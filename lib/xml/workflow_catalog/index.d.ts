type WorkflowCatalogDocumentTopElem = XmlTopElem & { Doc: WorkflowCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  condition_eval_str: XmlElem<string>;
  escalation_stages_str: XmlElem<string>;
  use_triggers: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type WorkflowCatalogDocument = XmlDocument & { TopElem: WorkflowCatalogDocumentTopElem; };
