
export const getDataPatients = async() => {
    const url = 'http://localhost:4000/api/patients';
    const resp = await fetch(url);
    const {data} = await resp.json();
    return data;
}
