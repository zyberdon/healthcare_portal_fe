export const fetchApi = async (req) => {
    const { url, reqBody } = req.payload
    try {

        const response = await fetch(url, {
            ...reqBody,
            //  headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqBody.body)
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}

export const endpoints = {
    LOGIN: 'http://10.138.176.213:5000/api/auth/login',
    REGISTER: 'http://localhost:4000/register',
    HOMEPAGE: 'http://localhost:4000/home',
}