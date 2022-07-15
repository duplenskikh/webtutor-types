const doc: CollaboratorDocument = (tools.open_doc(1)?.TopElem);

doc.BindToDb();

function handlerCollaboratorTopElem(te: CollaboratorDocument) {
  te.TopElem.firstname?.OptScreen?.AddExternalEditor;
  return te.TopElem.firstname?.Value;
}

handlerCollaboratorTopElem(doc.TopElem.Doc);
