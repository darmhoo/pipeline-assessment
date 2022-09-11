import fetchUsers from './utilities/fetchListFromApi';

const startApp = async () => {
	let a = await fetchUsers.fetchUsers();
	let data = a.results[0];
	let info = a.info;

	populateTable(data, info);

	let btn = document.querySelectorAll('button');
	

	btn[0].disabled = true;

	btn[1].addEventListener(
		'click',
		async () => {
			let res = await nextPage(data, info);
			a = res ? res : a;
			data = a.results[0];
			info = a.info;
			populateTable(data, info);
			btn[0].disabled = false;
		},
		false
	);

	btn[0].addEventListener(
		'click',
		async () => {
			let res = await previousPage(data, info);
			a = res ? res : a;
			data = a.results[0];
			info = a.info;
			populateTable(data, info);

			if (!data.paging.previous) {
				btn[0].disabled = true;
			}
		},
		false
	);
};

const populateTable = (data, info) => {
	let tbody = document.querySelector('tbody');

	for (let i = 0, row; (row = tbody?.rows[i]); i++) {
		row.setAttribute('data-entryid', data[info.page][i].id);
		row.cells[0].innerText = data[info.page][i].row;
		row.cells[1].innerText = data[info.page][i].gender;
		row.cells[2].innerText = data[info.page][i].age;
	}
	let label = document.querySelector('label');
	label.innerHTML = `Showing Page ${info.page}`;
};

const nextPage = async (dataF, info) => {
	if (info.page === Object.keys(dataF)[1]) {
		let a = await fetchUsers.fetchUsers(null, dataF.paging?.next);

		return a;
	} else {
		info.page = Object.keys(dataF)[1];
		populateTable(dataF, info);
		return null;
	}
};

const previousPage = async (dataF, info) => {
	if (info.page === Object.keys(dataF)[0]) {
		let a = await fetchUsers.fetchUsers(null, dataF.paging?.previous);
		return a;
	} else {
		info.page = Object.keys(dataF)[0];
		populateTable(dataF, info);
		return null;
	}
};

document.addEventListener('DOMContentLoaded', startApp);
