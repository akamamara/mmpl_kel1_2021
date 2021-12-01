function checkObjectIsEmpty(obj) {
	if (obj === undefined || obj === null) return true;
	return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

export default checkObjectIsEmpty;
