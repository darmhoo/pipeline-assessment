import axios from 'axios';
const standUrl = 'https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84';

async function fetchUsers(page: any = null, url: any = standUrl) {
	try {
		let list = await axios.get(url + (page ? `&page=${page}` : ''));
		return list.data;
	} catch (err) {
		alert(err.message);
	}
}

export default {
	fetchUsers,
};
