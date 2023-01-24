type ProfilingRecordCatalogDocumentTopElem = XmlTopElem & { Doc: ProfilingRecordCatalogDocument } & {
  id: XmlElem<number>;
  start_date: XmlElem<Date>;
  ticks: XmlElem<number>;
  url: XmlElem<string>;
  sid: XmlElem<string>;
  duration: XmlElem<number>;
  template_type: XmlElem<string>;
  template_id: XmlElem<number>;
  parent_template_type: XmlElem<string>;
  parent_template_id: XmlElem<number>;
}

type ProfilingRecordCatalogDocument = XmlDocument & { TopElem: ProfilingRecordCatalogDocumentTopElem; };
