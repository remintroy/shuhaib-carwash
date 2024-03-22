
import axios from "axios";

axios.defaults.withCredentials = true


const URL = 'https://server.triecleaningg.com'
// const URL =' http://localhost:4000'

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

export async function getPendingList(currentPage, pageSize) {
  console.log('calling');
  try {
    const response = await adminApi.get('/getPendingList', {
      params: {
        page: currentPage,
        pageSize: pageSize,
      },
    
    });
    return response.data;
  } catch (error) {
    console.error('Error in getPendingList:', error);
    throw error;
  }
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
        console.log(data,'jhghjgjg');
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
//exportList

export async function exportList(data){
    console.log('Form Data Content:');
    for (let pair of data.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    return new Promise((resolve,reject)=>{
        adminApi.post('/exportList',data,{
            headers: {
                'Content-Type': 'multipart/form-data',
              },
        }) 
    })
}
//admin Login

export async function adminLogin(data){
    console.log(data,'axios data');
    return new Promise((resolve,reject)=>{
      adminApi.post('/loginAdmin',data).then((resoponse)=>{
        console.log(resoponse,'...');
        if(resoponse){
            resolve(resoponse)
        }
      }).catch((error)=>{
        reject(error)
      })
    })
}

//add employee

export async function addEmp(data){
    return new Promise((resolve,reject)=>{
        adminApi.post('/addEmployees',data).then((response)=>{
          resolve(response)
        }).catch((error)=>{
            reject(error)
        })
    })
}
//getting employees
export async function getEmployees (){
    return new Promise((resolve,reject)=>{
        adminApi.get('/getEmployees').then((data)=>{
            if(data){
                resolve(data)
            }
        }).catch((error)=>{
            reject(error)
        })
    })
}
//employee Login 

export async function employeeLogin(data){
    return new Promise((resolve,reject)=>{
adminApi.post('/empLogin',data).then((res)=>{
    if(res){
        resolve(res)
    }
}).catch((error)=>{
    reject(error)
})
    })
}
//getEmplPendingList

export async function getEmplPendingList(currentPage, pageSize,data) {
    console.log('calling');
    try {
      const response = await adminApi.get('/getEmplPendingList', {
        params: {
          page: currentPage,
          pageSize: pageSize,
       
          data:data
        },
      
      });
      return response.data;
    } catch (error) {
      console.error('Error in getPendingList:', error);
      throw error;
    }
  }
//search

export async function search(data){
   return new Promise((resolve,reject)=>{
    adminApi.post('/searchTerm',data).then((response)=>{
        if(response){
resolve(response)
        }
    }).catch((error)=>{
        reject(error)
    })
   })

}
//new list
export async function newList(data){
    return new Promise((resolve,reject)=>{
        adminApi.post('/newList',data).then((res)=>{
        console.log(res,'sooo');
            if(res){
                resolve(res)
            }
        }).catch((error)=>{
            reject(error)
        })
    })
}
//get new List
export async function getnewList(){
    return new Promise((resolve,reject)=>{
        adminApi.get('/newListData').then((data)=>{
            console.log(data,'axios data');
            if(data){
                resolve(data)
            }
        }).catch((error)=>{
            reject(error)
        })
    })
}
//download new llist data
export async function downloadNewListData(){
    return new Promise((resolve,reject)=>{
        adminApi.get('/downloadNewListData', { responseType: 'arraybuffer' }).then((data,response)=>{
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