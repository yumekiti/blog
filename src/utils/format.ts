export const getTitle = (path: string) => {
	const splitedPath = path?.split("/").slice(-1) || [];
	const splitedUnderline =
		(splitedPath.length && splitedPath[0].split("_")) || [];
	const title = splitedUnderline.slice(1).join("_") || "";

	return title;
};

export const formatTableDate = (content: string) => {
	const contentArray = content.split("\n");
	const today = new Date();
	const day = today.getDate();

	let isFormat = false;
	let isStart = false;
	let isEnd = false;

	const formattedContentArray = contentArray.map((line) => {
		const isDateHeading =
			line.startsWith("## date_") || line.startsWith("### date_");
		let updatedLine = line;

		if (isDateHeading) {
			const date = updatedLine.replace("date_", "").split(" ")[1];
			const isCurrentYear =
				date.split("年")[0] === today.getFullYear().toString();
			updatedLine = updatedLine.replace("date_", "");
			isFormat = isCurrentYear;
		} else if (updatedLine.startsWith("##") || updatedLine.startsWith("###")) {
			isFormat = false;
		}

		if (isFormat) {
			const splitedLine = updatedLine.split("|");
			const splitedDay = splitedLine.slice(1, -1);
			splitedDay.forEach((day, index) => {
				splitedDay[index] = day.trim();
			});
			splitedDay.forEach((item, index) => {
				if (item === "1") {
					isStart = true;
				}
				if (isStart && String(day) === item && !isEnd) {
					splitedDay[index] = `**${item}**`;
					isEnd = true;
				}
				updatedLine = updatedLine.replace(
					splitedLine[index + 1],
					splitedDay[index],
				);
			});
		}

		return updatedLine;
	});

	return formattedContentArray.join("\n");
};

export const formatTableTime = (content: string) => {
	const contentArray = content.split("\n");

	let isFormat = false;

	const formattedContentArray = contentArray.map((line) => {
		const isTimeHeading =
			line.startsWith("## time_") || line.startsWith("### time_");
		let updatedLine = line;

		if (isTimeHeading) {
			updatedLine = updatedLine.replace("time_", "");
			isFormat = true;
		} else if (updatedLine.startsWith("##") || updatedLine.startsWith("###")) {
			isFormat = false;
		}

		if (isFormat) {
			const isTime = updatedLine.indexOf(":") !== -1;

			if (isTime) {
				const now = new Date();
				const date = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;

				const timeRange = updatedLine.split("~");
				const start = timeRange[0].replace(" ", "").replace("|", "").trim();
				const end = timeRange[1].replace(" ", "").split("|")[0].trim();
				const startTime = new Date(`${date} ${start}`);
				const endTime = new Date(`${date} ${end}`);

				if (startTime <= now && now <= endTime) {
					updatedLine = updatedLine.replace(
						`${start} ~ ${end}`,
						`**${start} ~ ${end}**`,
					);
				}
			}
		}

		return updatedLine;
	});

	return formattedContentArray.join("\n");
};

export const formatVariable = (content: string) => {
	const contentArray = content.split("\n");
	const variables: { name: string; value: string }[] = [];

	let currentVariable: { name: string; value: string } | null = null;

	const formattedContentArray = contentArray.map((line) => {
		let updatedLine = line;
		const isVariableHeading = updatedLine.startsWith("_");

		if (isVariableHeading) {
			const variableName = updatedLine.split("=")[0].replace("_", "");
			const isSingleQuotedValue = updatedLine.includes("'");

			if (isSingleQuotedValue) {
				const variableValue = updatedLine.split("'")[1];
				variables.push({ name: variableName, value: variableValue });
			} else {
				currentVariable = { name: variableName, value: "" };
			}

			updatedLine = "";
		} else if (currentVariable && updatedLine.startsWith("`")) {
			variables.push(currentVariable);
			currentVariable = null;
			updatedLine = "";
		} else if (currentVariable) {
			currentVariable.value += `${updatedLine}\n`;
			updatedLine = "";
		}

		for (const variable of variables) {
			updatedLine = updatedLine.replace(`{{${variable.name}}}`, variable.value);
		}

		return updatedLine;
	});

	return formattedContentArray.join("\n");
};
