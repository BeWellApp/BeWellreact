import baseUrl from './baseUrl';

export const getUser = async (phoneId) => {
    try {
        let response = await fetch(`${baseUrl}/users/login/${phoneId}`);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}