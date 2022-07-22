import api from './index'

export const getList =async (data)=>{
    let res =await api.post('/test',data);
    return res;
}