import { replaceRequests, addRequest } from "./requests-slice"


export const getRequests = () => {
    return async (dispatch) => {
        const getRequests = async () => {
            const response = await fetch('http://localhost:5050/api/request')
            return response
        }
        try{
            const response = await getRequests()
            
            if (response.status === 200){
                const jsonData = await response.json();
                dispatch(replaceRequests(jsonData))
            }
        }
        catch (error){
            console.log("Error in getRequests",error)
        }
    }
}


export const postRequest = (requestData) => {
    return async (dispatch) => {
        const postRequest = async() => {
            const response = await fetch('http://localhost:5050/api/request', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(requestData)
            })
            return response
        }
        try{
            await postRequest()
            dispatch(addRequest(requestData))
        }
        catch (error){
            console.log("Error in postRequest",error)
        }


    }
}