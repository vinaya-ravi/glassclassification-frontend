
import axiosInstance from "../axiosInstance";
const GLASS_API_URL = 'http://localhost:8001/ml';

class GlassClassificationServices {

    classifyText(text) {
        return axiosInstance.post(`${GLASS_API_URL}/classify-text`,text)
    }

    classifyImage(image) {
        return axiosInstance.post(`${GLASS_API_URL}/classify-image`,image)
    }

}

export default new GlassClassificationServices();
