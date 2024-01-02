
import axios from "axios";

axios.defaults.withCredentials = true


const URL = 'http://localhost:4000'

const adminApi = axios.create({
    baseURL:URL
})

//pending lilst

export async function pendinglist (data){
    console.log(data,'axios data');
    return new Promise((resolve,reject)=>{
        adminApi.post('/pendingList',data).then((data)=>{
            resolve(data)
        }).catch(error=>{
            reject(error)
        })
    })
}

export async function getPendingList(){
    console.log('caalinngg');
return new Promise((resolve,reject)=>{
    adminApi.get('/getPendingList').then((data)=>{
        resolve(data)
    }).catch((error)=>{
        console.log(error,'namma error');
        reject(error)
    })
})
}

export async function editList (data){
    console.log(data,'axios data...');
    return new Promise((resolve,reject)=>{
        adminApi.post('/editList',data).then((data)=>{
            resolve(data)
        }).catch(error=>{
            reject(error)
        })
    })
}

export async function getListbyId (id){
 console.log(id,'axios');
    return new Promise((resolve,reject)=>{
        adminApi.get(`/getListById${id}`).then((data)=>{
            resolve(data)
        }).catch((error)=>{
            reject(error)
        })
    })
}


export async function getrenewedList(){
return new Promise((resolve,reject)=>{
    adminApi.get('/renewedList').then((data)=>{
        resolve(data)
    }).catch((error)=>{
        console.log(error);
    })
})
}

export async function downloadData(){
    return new Promise((resolve,reject)=>{
        adminApi.get('/downloadData', { responseType: 'arraybuffer' }).then((data,response)=>{
            console.log(data,'dlfjlkdj');
            if(data){

                const blob = new Blob([data.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

                // Create a link element to trigger the download
                const link = document.createElement('a');
                
                link.href = window.URL.createObjectURL(blob);
                link.download = 'renewed_data.xlsx'; // Set the desired file name
                link.click();
              
            }
            else {
                console.error('Failed to download data:', response.statusText);
              }
          
        }).catch((error)=>{
            reject(error)
        })
    })
}
