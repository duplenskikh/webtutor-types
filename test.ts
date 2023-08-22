function main() {
  const doc = tools.open_doc<CareerReserveDocument>(1);

  if (doc === undefined) {
    return;
  }

  const activity = ArrayOptFind(doc.TopElem.tasks, "some_expression");

  const str = "hello";

  if (IsArray(str)) {
    return str;
  }

  return str;
}

function checkArrayMethods() {
    type TestObj = {
      option1: number;
      option2: number;
    };

    const testPrimitivesArray: number[] = [1, 2, 3, 4, 5];

    const testArrayOfObjects: TestObj[] = [
      {
        option1: 1,
        option2: 2,
      },
      {
        option1: 1,
        option2: 2,
      },
    ];

    const xmlDocumentForTesting = tools.open_doc<CareerReserveDocument>(1);

    if (xmlDocumentForTesting === undefined) {
      return;
    }

    //ArrayCount
    const arrayCount_Test__Primitives = ArrayCount(testPrimitivesArray);
    const arrayCount_Test__ArrayOfObjects = ArrayCount(testArrayOfObjects);
    const arrayCount_Test__XmlDocument = ArrayCount(xmlDocumentForTesting?.TopElem.tasks);

    // ArrayDirect
    const arrayDirect_Test__Primitives = ArrayDirect(testPrimitivesArray);
    const arrayDirect_Test__ArrayOfObjects = ArrayDirect(testArrayOfObjects);

    // ArrayExtract
    const arrayExtract_Test__Primitives = ArrayExtract(testPrimitivesArray, "This");
    const arrayExtract_Test__ArrayOfObjects = ArrayExtract(testArrayOfObjects, "This.option1");
    const arrayExtract_Test__XmlDocument = ArrayExtract(xmlDocumentForTesting?.TopElem.tasks, "This.name");

    // ArrayExtractKeys
    const arrayExtractKeys_Test__Primitives = ArrayExtractKeys(testPrimitivesArray, "This");
    const arrayExtractKeys_Test__ArrayOfObjects = ArrayExtractKeys(testArrayOfObjects, "This.option1");
    const arrayExtractKeys_Test__XmlDocument = ArrayExtractKeys(xmlDocumentForTesting?.TopElem.tasks, "This.name");

    // ArrayFind
    const arrayFind_Test__Primitives = ArrayFind(testPrimitivesArray, "This == 2");
    const arrayFind_Test__ArrayOfObjects = ArrayFind(testArrayOfObjects, "This.option1 == 1");
    const arrayFind_Test__XmlDocument = ArrayFind(xmlDocumentForTesting?.TopElem.tasks, "This.name == \"testValue\"");

    // ArrayFirstElem
    const arrayFirstElem_Test__Primitives = ArrayFirstElem(testPrimitivesArray);
    const arrayFirstElem_Test__ArrayOfObjects = ArrayFirstElem(testArrayOfObjects);
    const arrayFirstElem_Test__XmlDocument = ArrayFirstElem(xmlDocumentForTesting?.TopElem.tasks);

    // ArrayIntersect
    const arrayIntersect_Test__Primitives = ArrayIntersect(testPrimitivesArray, testArrayOfObjects);
    const arrayIntersect_Test__ArrayOfObjects = ArrayIntersect(testArrayOfObjects, testPrimitivesArray, "This.option1");
    const arrayIntersect_Test__XmlDocument = ArrayIntersect(xmlDocumentForTesting?.TopElem.tasks, testArrayOfObjects, "This.name", "This.option1");

    // ArrayMax
    const arrayMax_Test__Primitives = ArrayMax(testPrimitivesArray, "This");
    const arrayMax_Test__ArrayOfObjects = ArrayMax(testArrayOfObjects, "This.option1");
    const arrayMax_Test__XmlDocument = ArrayMax(xmlDocumentForTesting?.TopElem.tasks, "This.plan_date");

    // ArrayMerge
    const arrayMerge_Test__Primitives = ArrayMerge(testPrimitivesArray, "This", ";");
    const arrayMerge_Test__ArrayOfObjects = ArrayMerge(testArrayOfObjects, "This.option1", ";");
    const arrayMerge_Test__XmlDocument = ArrayMerge(xmlDocumentForTesting?.TopElem.tasks, "This.plan_date", ";");

    // ArrayMin
    const arrayMin_Test__Primitives = ArrayMin(testPrimitivesArray, "This");
    const arrayMin_Test__ArrayOfObjects = ArrayMin(testArrayOfObjects, "This.option1");
    const arrayMin_Test__XmlDocument = ArrayMin(xmlDocumentForTesting?.TopElem.tasks, "This.plan_date");

    // ArrayOptFind
    const arrayOptFind_Test__Primitives = ArrayOptFind(testPrimitivesArray, "This < 1");
    const arrayOptFind_Test__ArrayOfObjects = ArrayOptFind(testArrayOfObjects, "This.option1 > 2");
    const arrayOptFind_Test__XmlDocument = ArrayOptFind(xmlDocumentForTesting?.TopElem.tasks, "This.name != \"testValue\"");

    // ArrayOptFindByKey
    const arrayOptFindByKey_Test__Primitives = ArrayOptFindByKey(testPrimitivesArray, 2);
    const arrayOptFindByKey_Test__ArrayOfObjects = ArrayOptFindByKey(testArrayOfObjects, 1, "option1");
    const arrayOptFindByKey_Test__XmlDocument = ArrayOptFindByKey(xmlDocumentForTesting?.TopElem.tasks, "testValue");

    // ArrayOptFindBySortedKey
    const arrayOptFindBySortedKey_Test__Primitives = ArrayOptFindBySortedKey(testPrimitivesArray, 2);
    const arrayOptFindBySortedKey_Test__ArrayOfObjects = ArrayOptFindBySortedKey(testArrayOfObjects, 1, "option1");
    const arrayOptFindBySortedKey_Test__XmlDocument = ArrayOptFindBySortedKey(xmlDocumentForTesting?.TopElem.tasks, "testValue");

    // ArrayOptFirstElem
    const arrayOptFirstElem_Test__Primitives = ArrayOptFirstElem(testPrimitivesArray);
    const arrayOptFirstElem_Test__ArrayOfObjects = ArrayOptFirstElem(testArrayOfObjects, 1);
    const arrayOptFirstElem_Test__XmlDocument = ArrayOptFirstElem(xmlDocumentForTesting?.TopElem.tasks, "testValue");

    // ArrayOptMax
    const arrayOptMax_Test__Primitives = ArrayOptMax(testPrimitivesArray, "This");
    const arrayOptMax_Test__ArrayOfObjects = ArrayOptMax(testArrayOfObjects, "This.option1");
    const arrayOptMax_Test__XmlDocument = ArrayOptMax(xmlDocumentForTesting?.TopElem.tasks, "This.plan_date");

    // ArrayOptMin
    const arrayOptMin_Test__Primitives = ArrayOptMin(testPrimitivesArray, "This");
    const arrayOptMin_Test__ArrayOfObjects = ArrayOptMin(testArrayOfObjects, "This.option1");
    const arrayOptMin_Test__XmlDocument = ArrayOptMin(xmlDocumentForTesting?.TopElem.tasks, "This.plan_date");

    // ArrayRange
    const arrayRange_Test__Primitives = ArrayRange(testPrimitivesArray, 1, 3);
    const arrayRange_Test__ArrayOfObjects = ArrayRange(testArrayOfObjects, 0, 10);
    const arrayRange_Test__XmlDocument = ArrayRange(xmlDocumentForTesting?.TopElem.tasks, 3, 5);

    // ArraySelect
    const arraySelect_Test__Primitives = ArraySelect(testPrimitivesArray, "This < 1");
    const arraySelect_Test__ArrayOfObjects = ArraySelect(testArrayOfObjects, "This.option1 > 2");
    const arraySelect_Test__XmlDocument = ArraySelect(xmlDocumentForTesting?.TopElem.tasks, "This.name != \"testValue\"");

    // ArraySelectAll
    const arraySelectAll_Test__Primitives = ArraySelectAll(testPrimitivesArray);
    const arraySelectAll_Test__ArrayOfObjects = ArraySelectAll(testArrayOfObjects);
    const arraySelectAll_Test__XmlDocument = ArraySelectAll(xmlDocumentForTesting?.TopElem.tasks);

    // ArraySelectByKey
    const arraySelectByKey_Test__Primitives = ArraySelectByKey(testPrimitivesArray, 1, "This");
    const arraySelectByKey_Test__ArrayOfObjects = ArraySelectByKey(testArrayOfObjects, 1, "option1");
    const arraySelectByKey_Test__XmlDocument = ArraySelectByKey(xmlDocumentForTesting?.TopElem.tasks, "testValue", "name");

    // ArraySelectBySortedKey
    const arraySelectBySortedKey_Test__Primitives = ArraySelectBySortedKey(testPrimitivesArray, 1, "a");
    const arraySelectBySortedKey_Test__ArrayOfObjects = ArraySelectBySortedKey(testArrayOfObjects, 2, "option1");
    const arraySelectBySortedKey_Test__XmlDocument = ArraySelectBySortedKey(xmlDocumentForTesting?.TopElem.tasks, "testValue", "name");

    // ArraySelectDistinct
    const arraySelectDistinct_Test__Primitives = ArraySelectDistinct(testPrimitivesArray, "1");
    const arraySelectDistinct_Test__ArrayOfObjects = ArraySelectDistinct(testArrayOfObjects, "testValue");
    const arraySelectDistinct_Test__XmlDocument = ArraySelectDistinct(xmlDocumentForTesting?.TopElem.tasks, "testValue");

    // ArraySort
    const arraySort_Test__Primitives = ArraySort(testPrimitivesArray, "This", "-");
    const arraySort_Test__ArrayOfObjects = ArraySort(testArrayOfObjects, "option1", "-");
    const arraySort_Test__XmlDocument = ArraySort(xmlDocumentForTesting?.TopElem.tasks, "name", "+");

    // ArraySum
    const arraySum_Test__Primitives = ArraySum(testPrimitivesArray, "This");
    const arraySum_Test__ArrayOfObjects = ArraySum(testArrayOfObjects, "option1");
    const arraySum_Test__XmlDocument = ArraySum(xmlDocumentForTesting?.TopElem.tasks, "id");

    // ArrayUnion
    const arrayUnion_Test__Primitives = ArrayUnion(testPrimitivesArray, testArrayOfObjects);
    const arrayUnion_Test__ArrayOfObjects = ArrayUnion(testArrayOfObjects, xmlDocumentForTesting);
    const arrayUnion_Test__XmlDocument = ArrayUnion(xmlDocumentForTesting?.TopElem.tasks, testArrayOfObjects, testArrayOfObjects);

    // IsArray
    const isArray_Test__Primitives = IsArray(testPrimitivesArray);
    const isArray_Test__ArrayOfObjects = IsArray(testArrayOfObjects);
    const isArray_Test__XmlDocument = IsArray(xmlDocumentForTesting?.TopElem.tasks);
    const isArray_Test__NonArray2 = IsArray(1);
}
