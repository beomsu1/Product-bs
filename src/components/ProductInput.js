import { useRef, useState } from "react";
import { postProduct } from "../api/ProductAPI";

// 껍데기
const initState = {
    pname : '',
    pdesc : '',
    price : 0,
}

const ProductInput = () => {

    const [product , setProduct] = useState(initState)

    // 참조 값
    // useRef - DOM 노드나 다른 React 컴포넌트에 대한 참조를 생성하는 데 사용
    const fileRef = useRef()

    // file은 onchange 만해서 끝나는게 아님 -> formData
    const handleChange = (e) => {
        product[e.target.name] = e.target.value
        setProduct({...product})
    }

    // save하는 함수 생성
    const handleClickSave = (e) => {

        const formData = new FormData()

        // 하나씩 담아줘야함
        formData.append("pname",product.title)
        formData.append("pdesc",product.content)
        formData.append("price",product.writer)

        console.dir(fileRef.current)

        const arr = fileRef.current.files

        for (let file of arr) {
            formData.append("files", file)
        }

        postProduct(formData)

    }
    
    // clear 하는 함수 생성
    const handleClickClear = (e) => {
        fileRef.current.value = ''
    }



    return ( 
        <div>
            <h1>Product Input</h1>
            <div>
                <input type="text" name="pname" value={product.pname} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="pdesc" value={product.pdesc} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="price" value={product.price} onChange={handleChange}></input>
            </div>
            <div>
                <input type="file" multiple name="images" onChange={handleChange} ref={fileRef}></input>
            </div>
            <div>
                <button onClick={handleClickSave}>SAVE</button>
                <button onClick={handleClickClear}>CLEAR</button>
            </div>
        </div>
     );
}
 
export default ProductInput;