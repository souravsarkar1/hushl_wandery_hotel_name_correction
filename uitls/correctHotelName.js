import axios from "axios"

export const api = `https://api-dev.wandery.hushl.in/`
export const correctHotelName = (oldName, NewName)=>{
    const body_content = {
        oldhotelName : oldName,
        correcthotelName : NewName
    }
    console.log(body_content);
    axios.post(`${api}/correct-hotel-name`, body_content, {
        headers: {
            "Content-Type" : "application/json"
        }
    }  ).then((res)=>{
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    })
}