export const randFromArr = (arr) =>{
	const arrLen = arr.length;

	return arr[util.randInt(0, arrLen)];
}