
export const getDataPatients = async() => {
    const url = 'http://localhost:3000/patients';
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}
