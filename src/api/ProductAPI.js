import axios from "axios"

export const postProduct = async(FormData) => {

    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await axios.post(`http://localhost:8080/api/products/`, FormData , header)

    return res.data

}

export const listProduct = async(param) => {

    // 구조 분해 할당
    const {page,size,type,keyword} = param || {page:1, size:10 , type:null , keyword:null}

    // 기본 쿼리스트링
    let queryStr = `?page=${page}&size=${size}`

    // 키워드가 존재하면
    if(keyword){
        queryStr += `&type=${type}&keyword=${keyword}`
    }

    const res = await axios.get(`http://localhost:8080/api/products/list${queryStr}`)

    return res.data

}