import { getMataPelajaran } from "../api/mapel";

function MatpelList() {
	let data = [];

	function setData(newData) {
		newData.map((item) => {
			data.push(
				Object.keys(item)
					.map((key, index) => item[key])
					.join(" - ")
			);
		});
	}

	getMataPelajaran(setData);
	setTimeout(function () {
		return data;
	}, 500);
}

export default MatpelList;
