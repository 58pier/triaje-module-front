
export const getDataPatientsTriaje = async() => {
    const url = 'http://localhost:4000/api/triaje';
    const resp = await fetch(url);
    const {data} = await resp.json();
    return data;
}
