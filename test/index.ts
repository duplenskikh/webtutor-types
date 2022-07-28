const o9i856doc: CollaboratorDocument | undefined = (tools.open_doc(1));

doc?.BindToDb();

function handlerCollaboratorDocumentTopElem(te: CollaboratorDocument) {
  te.TopElem.firstname?.OptScreen?.AddExternalEditor;
  return te.TopElem.firstname?.Value;
}

if (doc !== undefined) {
  handlerCollaboratorDocumentTopElem(doc.TopElem.Doc);
}
