
export const getDataPatientsTriaje = async() => {
    const url = 'http://localhost:3000/dataTriaje';
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}
