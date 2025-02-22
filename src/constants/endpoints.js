export const fetchApi = async (req = { method: 'GET' }) => {
    const { url, reqBody } = req
    try {

        const response = await fetch(url, req);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}