import axios from 'axios';

export function errorInterceptor() {
    axios.interceptors.response.use(null, async (err) => {
        if (!err.response) {
            // network error
            console.error(err);
            return;
        }
        if (err.response.status === 400 && err.response.data.source.info !== "Invalid token") {
            //console.log("BAD_REQUEST");
            window.location.href = "/";
        }
    });
}