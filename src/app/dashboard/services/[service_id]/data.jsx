export async function getData(id){
    const res = await fatch('/dashboard/services/?/api', id)
    if (!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json()
}