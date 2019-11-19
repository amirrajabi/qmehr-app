import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer vyy6xT9uW7_-Q2lPBChRYtvP0n_bOGrGzRme5aKRGjds0W2CwESmcqzv59c7VFBunHzKiS4l0cDJoOJgcUvIK2_lvIDunTkuVbsiv6CT10aXwS7CmkNeQ95ve3jSXXYx'
    }
});
