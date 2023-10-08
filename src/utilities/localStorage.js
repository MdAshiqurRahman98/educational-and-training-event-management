const getStoredService = () =>{
    const storedService = localStorage.getItem ('service');
    if(storedService){
        return JSON.parse(storedService);
    }
    return [];
}

const saveService = id =>{
    const storedService = getStoredService();
    const exists = storedService.find(serviceId => serviceId === id);
    if(!exists){
        storedService.push(id);
        localStorage.setItem('service', JSON.stringify(storedService))
    }
}

export { getStoredService, saveService}