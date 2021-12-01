function CapitalizeEachWord(sentence, spliter = " ") {
	const words = sentence.split(spliter);

	return words
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(" ");
}

export default CapitalizeEachWord;
