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
const arrayIntersectXmlResultData = ArrayIntersect(
  xmlDocumentForTesting.TopElem.tasks,
  xmlDocumentForTesting.TopElem.tasks,
  "This.name",
  "This.option1"
);

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
const arraySelectBySortedKeyXmlResultData = ArraySelectBySortedKey(
  xmlDocumentForTesting.TopElem.tasks,
  "testValue",
  "name"
);
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

var result = MailMessage();
result.Send();

DefaultDb.Name = "default_db_name";
if (DefaultDb.IsShared) {
  DefaultDb.StorageDirectory = "";
  var document = DefaultDb.OpenNewObjectDoc<VacancyDocument>("vacancy");
  document.TopElem.Name == "vacancy";
}

// eslint-disable-next-line no-new-object
const object1 = new Object();
const object2 = {};
const object3 = Object();

alert(object1 == object2);
alert(object1 == object3);

ArraySelectAll([]);

const stringValue = object1.GetOptProperty("value");

alert(stringValue);

var obj = {
  key: "value",
  key1: "value",
  key3: "value",
};

obj.SetProperty("1", "1");
var propertyValue = obj.GetProperty("key1");
var propertyValue1 = obj.GetOptProperty<typeof obj, string, number>("key12", 1);
var propertyValue2 = obj.GetOptProperty("key12", 1);

propertyValue;
propertyValue1;
propertyValue2;

DecodeCharset("teststring", "cp-866");
EncodeCharset("teststring1", "windows-1251");
EncodeCharset("teststring2", "windows-1252");
