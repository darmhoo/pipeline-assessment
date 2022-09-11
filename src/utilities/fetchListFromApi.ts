import axios from 'axios';
let list = [1, 2, 3, 4, 5];
const standUrl = 'https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84';

async function fetchUsers(page: any = null, url: any = standUrl) {
    console.log('igothre');
    try{
        let list = await axios.get(url + (page ? `&page=${page}` : ''));
       return list.data;
    }catch(err){
        console.log(err)
    }

    
}



export default {
    fetchUsers
}
