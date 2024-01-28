import { testArrayOfObjects, testPrimitivesArray, xmlDocumentForTesting } from "./mocks/arrayFunctions";

CheckPamMd5("source_string", "checksum");

ArrayCount(testPrimitivesArray);
ArrayCount(testArrayOfObjects);
ArrayCount(xmlDocumentForTesting.TopElem.tasks);

ArrayDirect(testPrimitivesArray);
ArrayDirect(testArrayOfObjects);
ArrayDirect(xmlDocumentForTesting.TopElem.tasks);

ArrayExtract(testPrimitivesArray, "This");
ArrayExtract(testArrayOfObjects, "This.option1");
ArrayExtract(xmlDocumentForTesting.TopElem.tasks, "This.name");

ArrayExtractKeys(testPrimitivesArray, "This");
ArrayExtractKeys(testArrayOfObjects, "This.option1");
ArrayExtractKeys(xmlDocumentForTesting.TopElem.tasks, "This.name");

ArrayFind(testPrimitivesArray, "This == 2");
ArrayFind(testArrayOfObjects, "This.option1 == 1");
const arrayFindXmlResultData = ArrayFind(xmlDocumentForTesting.TopElem.tasks, "This.name == \"testValue\"");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayFindXmlResultData.OptChild("testValue");

ArrayFirstElem(testPrimitivesArray);
ArrayFirstElem(testArrayOfObjects);
const arrayFirstElemXmlResultData = ArrayFirstElem(xmlDocumentForTesting.TopElem.tasks);
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayFirstElemXmlResultData.OptChild("testValue");

ArrayIntersect(testPrimitivesArray, testArrayOfObjects);
ArrayIntersect(testArrayOfObjects, testPrimitivesArray, "This.option1");
ArrayIntersect(ArrayDirect(xmlDocumentForTesting.TopElem.tasks), testArrayOfObjects, "This.name", "This.option1");
const arrayIntersectXmlResultData = ArrayIntersect(xmlDocumentForTesting.TopElem.tasks, xmlDocumentForTesting.TopElem.tasks, "This.name", "This.option1");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayIntersectXmlResultData[0].OptChild("testValue");

ArrayMax(testPrimitivesArray, "This");
ArrayMax(testArrayOfObjects, "This.option1");
const arrayMaxXmlResultData = ArrayMax(xmlDocumentForTesting.TopElem.tasks, "This.plan_date");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayMaxXmlResultData.OptChild("testValue");

ArrayMerge(testPrimitivesArray, "This", ";");
ArrayMerge(testArrayOfObjects, "This.option1", ";");
ArrayMerge(xmlDocumentForTesting.TopElem.tasks, "This.plan_date", ";");

ArrayMin(testPrimitivesArray, "This");
ArrayMin(testArrayOfObjects, "This.option1");
const arrayMinXmlResultData = ArrayMin(xmlDocumentForTesting.TopElem.tasks, "This.plan_date");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayMinXmlResultData.OptChild("testValue");

ArrayOptFind(testPrimitivesArray, "This < 1");
ArrayOptFind(testArrayOfObjects, "This.option1 > 2");
const arrayOptFindXmlResultData = ArrayOptFind(xmlDocumentForTesting.TopElem.tasks, "This.name != \"testValue\"");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayOptFindXmlResultData?.OptChild("testValue");

ArrayOptFindByKey(testPrimitivesArray, 2);
ArrayOptFindByKey(testArrayOfObjects, 1, "option1");
const arrayOptFindByKeyXmlResultData = ArrayOptFindByKey(xmlDocumentForTesting.TopElem.tasks, "testValue");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayOptFindByKeyXmlResultData?.OptChild("testValue");

ArrayOptFindBySortedKey(testPrimitivesArray, 2);
ArrayOptFindBySortedKey(testArrayOfObjects, 1, "option1");
const arrayOptFindBySortedKeyXmlResultData = ArrayOptFindBySortedKey(xmlDocumentForTesting.TopElem.tasks, "testValue");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayOptFindBySortedKeyXmlResultData?.OptChild("testValue");

ArrayOptFirstElem(testPrimitivesArray);
ArrayOptFirstElem(testArrayOfObjects, 1);
const arrayOptFirstElemXmlResultData = ArrayOptFirstElem(xmlDocumentForTesting.TopElem.tasks);
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayOptFirstElemXmlResultData?.OptChild("testValue");
const arrayOptFirstElemXmlResultDataDefaultValue = ArrayOptFirstElem(xmlDocumentForTesting.TopElem.tasks, "testValue");
if (arrayOptFirstElemXmlResultDataDefaultValue !== "testValue") {
  // если нам вернулось не значение по умолчанию то должен быть XmlElem
  arrayOptFirstElemXmlResultDataDefaultValue?.OptChild("testValue");
}

ArrayOptMax(testPrimitivesArray, "This");
ArrayOptMax(testArrayOfObjects, "This.option1");
const arrayOptMaxXmlResultData = ArrayOptMax(xmlDocumentForTesting.TopElem.tasks, "This.plan_date");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayOptMaxXmlResultData?.OptChild("testValue");

ArrayOptMin(testPrimitivesArray, "This");
ArrayOptMin(testArrayOfObjects, "This.option1");
const arrayOptMinXmlResultData = ArrayOptMin(xmlDocumentForTesting.TopElem.tasks, "This.plan_date");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayOptMinXmlResultData?.OptChild("testValue");

ArrayRange(testPrimitivesArray, 1, 3);
ArrayRange(testArrayOfObjects, 0, 10);
const arrayRangeXmlResultData = ArrayRange(xmlDocumentForTesting.TopElem.tasks, 3, 5);
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arrayRangeXmlResultData[0].OptChild("testValue");

ArraySelect(testPrimitivesArray, "This < 1");
ArraySelect(testArrayOfObjects, "This.option1 > 2");
const arraySelectXmlResultData = ArraySelect(xmlDocumentForTesting.TopElem.tasks, "This.name != \"testValue\"");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arraySelectXmlResultData[0].OptChild("testValue");

ArraySelectAll(testPrimitivesArray);
ArraySelectAll(testArrayOfObjects);
const arraySelectAllXmlResultData = ArraySelectAll(xmlDocumentForTesting.TopElem.tasks);
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arraySelectAllXmlResultData[0].OptChild("testValue");

ArraySelectByKey(testPrimitivesArray, 1, "This");
ArraySelectByKey(testArrayOfObjects, 1, "option1");
const arraySelectByKeyXmlResultData = ArraySelectByKey(xmlDocumentForTesting.TopElem.tasks, "testValue", "name");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arraySelectByKeyXmlResultData[0].OptChild("testValue");

ArraySelectBySortedKey(testPrimitivesArray, 1, "a");
ArraySelectBySortedKey(testArrayOfObjects, 2, "option1");
const arraySelectBySortedKeyXmlResultData = ArraySelectBySortedKey(xmlDocumentForTesting.TopElem.tasks, "testValue", "name");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arraySelectBySortedKeyXmlResultData[0].OptChild("testValue");

ArraySelectDistinct(testPrimitivesArray, "1");
ArraySelectDistinct(testArrayOfObjects, "testValue");
const arraySelectDistinctXmlResultData = ArraySelectDistinct(xmlDocumentForTesting.TopElem.tasks, "testValue");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arraySelectDistinctXmlResultData[0].OptChild("testValue");

ArraySort(testPrimitivesArray, "This", "-");
ArraySort(testArrayOfObjects, "option1", "-");
const arraySortXmlResultData = ArraySort(xmlDocumentForTesting.TopElem.tasks, "name", "+");
// проверка на то что мы получаем XmlElem, к которому можем обратиться
arraySortXmlResultData[0].OptChild("testValue");

ArraySum(testPrimitivesArray, "This");
ArraySum(testArrayOfObjects, "option1");
ArraySum(xmlDocumentForTesting.TopElem.tasks, "id");

ArrayUnion(testPrimitivesArray, testArrayOfObjects);
ArrayUnion(testArrayOfObjects, xmlDocumentForTesting);
ArrayUnion(xmlDocumentForTesting.TopElem.tasks, testArrayOfObjects, testArrayOfObjects);

IsArray(testPrimitivesArray);
IsArray(testArrayOfObjects);
IsArray(xmlDocumentForTesting.TopElem.tasks);
IsArray(1);

var workflowDoc: WorkflowDocument = tools.open_doc(1)!;

// Проверка чейнинга
workflowDoc.TopElem.Doc.TopElem.escalations[0].Doc.TopElem.escalations[0].assessments[0].assessment_id.Doc;
workflowDoc.TopElem.is_std.Doc.TopElem.doc_info.creation.date.Doc.TopElem.doc_info.creation.Doc.TopElem.doc_info.creation.user_id.Value;

//Проверка LastSavedData
workflowDoc.LastSavedData.role_id.Value;

//Проверка получения значений через Child
var childXmlElem = workflowDoc.TopElem.Child("has_error");
childXmlElem.Value;

var childXmlMultiElem = workflowDoc.TopElem.Child("escalations");
childXmlMultiElem[0].type.Value;

//Проверка ссылок на родителя
childXmlElem.Parent;
childXmlMultiElem[0].Parent;
workflowDoc.TopElem.Parent;
workflowDoc.TopElem.warning_str.Parent;

var result = MailMessage();