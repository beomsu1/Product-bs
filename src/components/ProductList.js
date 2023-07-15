import { useEffect, useState } from "react";
import { listProduct } from "../api/ProductAPI";

// responseDTO 껍데기 생성
const initState = {
    dtoList: [],
    page: 0,
    size: 0,
    pageNums: [],
    next: false,
    prev: false,
    end: 0,
    start: 0,
    requsetDTO: null

}




const ProductList = () => {

    const [list, setList] = useState(initState)

    useEffect(() => {

        // 비동기 통신
        listProduct().then(data => {
            setList(data)
        })


    }, [])


    return (

        <div>
            <ul>
                {list.dtoList.map(dto =>
                    <li key={dto.pno}>
                        {dto.pname} - {dto.price}
                        <div>
                            <img src={`http://localhost/s_${dto.fname}`} />
                        </div>
                    </li>)}
            </ul>
        </div>
    );
}

export default ProductList;