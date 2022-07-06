const doc: ServerAgentDocument = tools.open_doc(1);

const te = doc.TopElem;

const te1: ServerAgentTopElem = s(te.Doc);

doc.BindToDb();

function s(serverAgentDocument: ServerAgentDocument) {
  return serverAgentDocument.TopElem;
}
