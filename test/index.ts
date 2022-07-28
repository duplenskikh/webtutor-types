const doc: CollaboratorDocument | undefined = (tools.open_doc(1));

if (doc !== undefined) {
  doc?.BindToDb();
  
  doc.TopElem.comment?.Value;
  
  if (doc !== undefined) {
    handlerCollaboratorDocumentTopElem(doc.TopElem.Doc);
  }
}

function handlerCollaboratorDocumentTopElem(te: CollaboratorDocument) {
  te.TopElem.firstname?.OptScreen?.AddExternalEditor;
  return te.TopElem.firstname?.Value;
}
