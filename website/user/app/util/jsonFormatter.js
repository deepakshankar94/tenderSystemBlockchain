const checkIfIsArrayOfObjects = (arrayData) => {
	let result = true;
	if (!Array.isArray(arrayData)) {
		result = false;
		return result;
	}
	const arrayDataCopy = arrayData;
	arrayDataCopy.forEach((data) => {
		if (typeof (data) !== 'object') {
			result = false;
		}
	});
	return result;
};

const prepareHashedObjectsForArraysInJSON = (objectData, hashKey) => {
	let objectDataCopy = objectData;

	if (!Array.isArray(objectData) && (typeof (objectDataCopy) === 'object')) {
		Object.keys(objectDataCopy).map((key) => {
			const value = objectDataCopy[key];
			objectDataCopy[key] = prepareHashedObjectsForArraysInJSON(value, hashKey);
		});
	} else if (checkIfIsArrayOfObjects(objectDataCopy)) {
		const hashedArrayData = {};
		objectDataCopy.forEach((data) => {
			if (data != null) {
				hashedArrayData[data[hashKey]] = prepareHashedObjectsForArraysInJSON(data, hashKey);
			}
		});
		objectDataCopy = hashedArrayData;
	}
	return objectDataCopy;
};

export {
	prepareHashedObjectsForArraysInJSON,
	checkIfIsArrayOfObjects
};
