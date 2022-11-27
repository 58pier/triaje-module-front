
export const getDataPatientsTriaje = async() => {
    const url = 'http://localhost:4000/api/triaje';
    const resp = await fetch(url);
    const {data} = await resp.json();
    return data;
}
export const getDataPatientTriaje = async(dni:number) => {
    const url = `http://localhost:4000/api/triaje/${dni}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    return data[0];
}
